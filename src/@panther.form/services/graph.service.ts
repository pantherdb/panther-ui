import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Cam,
  Annoton,
  Triple,
  AnnotonNode,
  Evidence,
  Entity,
  ConnectorAnnoton,
  ConnectorType,
  ConnectorState,
  Predicate
} from './../models/annoton/';

import * as ModelDefinition from './../data/config/model-definition';
import * as EntityDefinition from './../data/config/entity-definition';

import { pantherFormConfig } from './../panther-form-config';
import { PantherFormConfigService } from './config/panther-form-config.service';
import { PantherLookupService } from './lookup.service';
import { PantherUserService } from './../services/user.service';
import { AnnotonType } from './../models/annoton/annoton';
import { Contributor } from './../models/contributor';
import { find } from 'lodash';
import { Group } from './../models';
import { CardinalityViolation, RelationViolation } from './../models/annoton/error/violation-error';

declare const require: any;

const each = require('lodash/forEach');
const model = require('bbop-graph-panther');
const amigo = require('amigo2');
const barista_response = require('bbop-response-barista');
const minerva_requests = require('minerva-requests');
const jquery_engine = require('bbop-rest-manager').jquery;
const class_expression = require('class-expression');
const minerva_manager = require('bbop-manager-minerva');

@Injectable({
  providedIn: 'root'
})
export class PantherGraphService {
  baristaLocation = environment.globalBaristaLocation;
  minervaDefinitionName = environment.globalMinervaDefinitionName;
  linker = new amigo.linker();

  constructor(
    private pantherUserService: PantherUserService,
    public pantherFormConfigService: PantherFormConfigService,
    private pantherLookupService: PantherLookupService) {
  }

  registerManager() {
    const engine = new jquery_engine(barista_response);
    engine.method('POST');

    const manager = new minerva_manager(
      this.baristaLocation,
      this.minervaDefinitionName,
      this.pantherUserService.baristaToken,
      engine, 'async');

    const managerError = (resp) => {
      console.log('There was a manager error (' +
        resp.message_type() + '): ' + resp.message());
    };

    const warning = (resp) => {
      alert('Warning: ' + resp.message() + '; ' +
        'your operation was likely not performed');
    };

    const error = (resp) => {
      const perm_flag = 'InsufficientPermissionsException';
      const token_flag = 'token';
      if (resp.message() && resp.message().indexOf(perm_flag) !== -1) {
        alert('Error: it seems like you do not have permission to ' +
          'perform that operation. Did you remember to login?');
      } else if (resp.message() && resp.message().indexOf(token_flag) !== -1) {
        alert('Error: it seems like you have a bad token...');
      } else {
        console.log('error:', resp, resp.message_type(), resp.message());

        if (resp.message().includes('UnknownIdentifierException')) {
          //  cam.error = true
        }
      }
    };

    const shieldsUp = () => { };
    const shieldsDown = () => { };

    manager.register('prerun', shieldsUp);
    manager.register('postrun', shieldsDown, 9);
    manager.register('manager_error', managerError, 10);
    manager.register('warning', warning, 10);
    manager.register('error', error, 10);

    manager.use_reasoner_p(true);

    return manager;
  }

  getGraphInfo(cam: Cam, modelId) {
    const self = this;

    cam.onGraphChanged = new BehaviorSubject(null);
    cam.id = modelId;
    cam.manager = this.registerManager();
    cam.individualManager = this.registerManager();
    cam.groupManager = this.registerManager();

    const rebuild = (response) => {
      const panther_graph = model.graph;

      cam.loading.status = true;
      cam.loading.message = 'Loading Model Entities Metadata...';

      cam.graph = new panther_graph();
      cam.id = response.data().id;
      cam.modifiedP = response['modified-p'];
      cam.graph.load_data_basic(response.data());
      cam.isReasoned = response['is-reasoned'];

      if (cam.isReasoned) {

      }

      const titleAnnotations = cam.graph.get_annotations_by_key('title');
      const stateAnnotations = cam.graph.get_annotations_by_key('state');
      const dateAnnotations = cam.graph.get_annotations_by_key('date');

      if (dateAnnotations.length > 0) {
        cam.date = dateAnnotations[0].value();
      }

      if (titleAnnotations.length > 0) {
        cam.title = titleAnnotations[0].value();
      }

      if (stateAnnotations.length > 0) {
        cam.state = self.pantherFormConfigService.findModelState(stateAnnotations[0].value());
      }

      self.populateContributors(cam);
      self.populateGroups(cam);


      self.loadCam(cam);
      self.loadViolations(cam, response.data()['validation-results'])
      cam.loading.status = false;
      cam.loading.message = '';
    };

    cam.manager.register('rebuild', function (resp) {
      rebuild(resp);
    }, 10);

    cam.manager.get_model(modelId);
  }

  loadCam(cam: Cam) {
    const self = this;

    cam.annotons = self.graphToAnnotons(cam);
    cam.applyFilter();
    cam.onGraphChanged.next(cam.annotons);
    cam.connectorAnnotons = self.getConnectorAnnotons(cam);
    cam.setPreview();
  }

  loadViolations(cam: Cam, validationResults) {
    const self = this;
    let violations;

    if (validationResults &&
      validationResults['shex-validation'] &&
      validationResults['shex-validation']['violations']) {
      violations = validationResults['shex-validation']['violations'];
      cam.hasViolations = violations.length > 0;
      cam.violations = [];
      violations.forEach((violation: any) => {
        violation.explanations.forEach((explanation) => {
          explanation.constraints.forEach((constraint) => {
            const camViolation = self.generateViolation(cam, violation.node, constraint);

            if (camViolation) {
              cam.violations.push(camViolation);
            }
          });
        });
      });
    }

    cam.setViolations();
    console.log(cam.violations);

  }

  generateViolation(cam: Cam, node, constraint) {
    const self = this;
    const annotonNode = self.nodeToAnnotonNode(cam.graph, node)

    if (!annotonNode) {
      return null;
    }

    let violation;
    if (constraint.cardinality) {
      const edge = self.pantherFormConfigService.findEdge(constraint.property);
      violation = new CardinalityViolation(
        annotonNode,
        edge,
        constraint.nobjects,
        constraint.cardinality
      );
    } else if (constraint.object) {
      violation = new RelationViolation(annotonNode);
      violation.predicate = self.pantherFormConfigService.findEdge(constraint.property);
      violation.object = self.nodeToAnnotonNode(cam.graph, constraint.object);
    }

    return violation;
  }

  populateContributors(cam: Cam) {
    const self = this;
    const contributorAnnotations = cam.graph.get_annotations_by_key('contributor');

    cam.contributors = <Contributor[]>contributorAnnotations.map((contributorAnnotation) => {
      const orcid = contributorAnnotation.value();
      const contributor = find(self.pantherUserService.contributors, (user: Contributor) => {
        return user.orcid === orcid;
      });

      return contributor ? contributor : { orcid: orcid };
    });
  }

  populateGroups(cam: Cam) {
    const self = this;
    const groupAnnotations = cam.graph.get_annotations_by_key('providedBy');

    cam.groups = <Group[]>groupAnnotations.map((groupAnnotation) => {
      const url = groupAnnotation.value();
      const group = find(self.pantherUserService.groups, (inGroup: Group) => {
        return inGroup.url === url;
      });

      return group ? group : { url: url };
    });
  }

  getNodeInfo(node) {
    const result: any = {};

    each(node.types(), function (srcType) {
      const type = srcType.type() === 'complement' ? srcType.complement_class_expression() : srcType;

      result.id = type.class_id();
      result.label = type.class_label();
      result.classExpression = type;
    });

    return result;
  }

  getNodeRootInfo(node): Entity[] {
    const result = node.root_types().map((srcType) => {
      const type = srcType.type() === 'complement' ? srcType.complement_class_expression() : srcType;
      return new Entity(type.class_id(), type.class_label());
    });

    return result;
  }

  getNodeLocation(node) {
    const result = {
      x: 0,
      y: 0
    };

    const x_annotations = node.get_annotations_by_key('hint-layout-x');
    const y_annotations = node.get_annotations_by_key('hint-layout-y');

    if (x_annotations.length === 1) {
      result.x = parseInt(x_annotations[0].value());
    }

    if (y_annotations.length === 1) {
      result.y = parseInt(y_annotations[0].value());
    }

    return result;
  }

  getNodeIsComplement(node) {
    let result = true;

    if (node) {
      each(node.types(), function (in_type) {
        const t = in_type.type();
        result = result && (t === 'complement');
      });
    }

    return result;
  }

  nodeToAnnotonNode(graph, objectId): Partial<AnnotonNode> {
    const self = this;

    const node = graph.get_node(objectId);
    if (!node) {
      return null;
    }
    const nodeInfo = self.getNodeInfo(node);
    const result = {
      uuid: objectId,
      term: new Entity(nodeInfo.id, nodeInfo.label, self.linker.url(nodeInfo.id), objectId),
      rootTypes: self.getNodeRootInfo(node),
      classExpression: nodeInfo.classExpression,
      location: self.getNodeLocation(node),
      isComplement: self.getNodeIsComplement(node),
    };

    //if (result.uuid === 'gomodel:R-HSA-9679509/R-COV-9686310_R-HSA-9686174') {
    //  console.log(result.term.label, result.rootTypes, result.uuid)
    //}

    return new AnnotonNode(result);
  }

  edgeToEvidence(graph, edge) {
    const self = this;
    const evidenceAnnotations = edge.get_annotations_by_key('evidence');
    const result = [];

    each(evidenceAnnotations, function (evidenceAnnotation) {
      const annotationId = evidenceAnnotation.value();
      const annotationNode = graph.get_node(annotationId);
      const evidence = new Evidence();

      evidence.edge = new Entity(edge.predicate_id(), '');
      evidence.uuid = annotationNode.id();
      if (annotationNode) {

        const nodeInfo = self.getNodeInfo(annotationNode);
        evidence.setEvidence(new Entity(nodeInfo.id,
          nodeInfo.label,
          self.pantherLookupService.getTermURL(nodeInfo.id)), nodeInfo.classExpression);

        const sources = annotationNode.get_annotations_by_key('source');
        const withs = annotationNode.get_annotations_by_key('with');
        const assignedBys = annotationNode.get_annotations_by_key('providedBy');
        if (sources.length > 0) {
          evidence.reference = sources[0].value();
          evidence.referenceUrl = self.pantherLookupService.getTermURL(evidence.reference);
        }
        if (withs.length > 0) {
          if (withs[0].value().startsWith('gomodel')) {
            evidence.with = withs[0].value();
          } else {
            evidence.with = withs[0].value();
          }
        }
        if (assignedBys.length > 0) {
          evidence.assignedBy = new Entity(null,
            self.pantherUserService.getGroupName(assignedBys[0].value()),
            assignedBys[0].value());
        }
        result.push(evidence);
      }
    });

    return result;
  }

  graphPreParse(graph) {
    const self = this;
    const promises = [];

    each(graph.get_nodes(), function (node) {
      const termNodeInfo = self.getNodeInfo(node);
      each(EntityDefinition.EntityCategories, (category) => {
        promises.push(self.isaClosurePreParse(termNodeInfo.id, category));
      });
    });

    return forkJoin(promises);
  }

  graphPostParse(cam: Cam) {
    const self = this;
    const promises = [];

    each(cam.annotons, function (annoton: Annoton) {
      const mfNode = annoton.getMFNode();

      if (mfNode && mfNode.hasValue()) {
        promises.push(self.isaClosurePostParse(mfNode.getTerm().id, [EntityDefinition.GoCatalyticActivity], mfNode));
      }
    });

    return forkJoin(promises);
  }

  isaClosurePreParse(a: string, b: any[]) {
    const self = this;
    const closure = self.pantherLookupService.categoryToClosure(b);

    return self.pantherLookupService.isaClosure(a, closure)
      .pipe(
        map((response) => {
          self.pantherLookupService.addLocalClosure(a, closure, response);
        })
      );
  }

  isaClosurePostParse(a: string, b: any[], node: AnnotonNode) {
    const self = this;
    const closure = self.pantherLookupService.categoryToClosure(b);

    return self.pantherLookupService.isaClosure(a, closure).pipe(
      map(result => {
        node.isCatalyticActivity = result;
        return result;
      }));
  }

  getActivityPreset(subjectNode: Partial<AnnotonNode>, predicateId, bbopSubjectEdges): Annoton {
    const self = this;
    let annotonType = AnnotonType.default;

    if (predicateId === pantherFormConfig.edge.partOf.id &&
      subjectNode.hasRootType(EntityDefinition.GoMolecularEntity)) {
      annotonType = AnnotonType.ccOnly;
    } else if (subjectNode.term.id === pantherFormConfig.rootNode.mf.id) {
      each(bbopSubjectEdges, function (subjectEdge) {
        if (find(pantherFormConfig.causalEdges, { id: subjectEdge.predicate_id() })) {
          annotonType = AnnotonType.bpOnly;
        }
      });
    }

    return self.pantherFormConfigService.createAnnotonBaseModel(annotonType);
  }

  graphToAnnotons(cam: Cam): Annoton[] {
    const self = this;
    const annotons: Annoton[] = [];

    cam.loading.message = 'Generating activities...';

    each(cam.graph.all_edges(), (bbopEdge) => {
      const bbopSubjectId = bbopEdge.subject_id();
      const subjectNode = self.nodeToAnnotonNode(cam.graph, bbopSubjectId);

      if (bbopEdge.predicate_id() === pantherFormConfig.edge.enabledBy.id ||
        (bbopEdge.predicate_id() === pantherFormConfig.edge.partOf.id &&
          subjectNode.hasRootType(EntityDefinition.GoMolecularEntity))) {

        const subjectEdges = cam.graph.get_edges_by_subject(bbopSubjectId);
        const annoton: Annoton = self.getActivityPreset(subjectNode, bbopEdge.predicate_id(), subjectEdges);
        const subjectAnnotonNode = annoton.rootNode;

        subjectAnnotonNode.term = subjectNode.term;
        subjectAnnotonNode.classExpression = subjectNode.classExpression;
        subjectAnnotonNode.setIsComplement(subjectNode.isComplement);
        subjectAnnotonNode.uuid = bbopSubjectId;
        self._graphToAnnotonDFS(cam, annoton, subjectEdges, subjectAnnotonNode);
        annoton.id = bbopSubjectId;
        annoton.postRunUpdate();
        annotons.push(annoton);
      }
    });

    return annotons;
  }

  getConnectorAnnotons(cam: Cam) {
    const self = this;
    const connectorAnnotons: ConnectorAnnoton[] = [];

    each(cam.annotons, (subjectAnnoton: Annoton) => {
      each(cam.graph.get_edges_by_subject(subjectAnnoton.id), (bbopEdge) => {
        const predicateId = bbopEdge.predicate_id();
        const evidence = self.edgeToEvidence(cam.graph, bbopEdge);
        const objectId = bbopEdge.object_id();
        const objectInfo = self.nodeToAnnotonNode(cam.graph, objectId);

        const causalEdge = <Entity>find(pantherFormConfig.causalEdges, {
          id: predicateId
        });

        if (causalEdge) {
          if (objectInfo.hasRootType(EntityDefinition.GoMolecularFunction)) {
            const downstreamAnnoton = cam.getAnnotonByConnectionId(objectId);
            const connectorAnnoton = this.pantherFormConfigService.createAnnotonConnectorModel(subjectAnnoton, downstreamAnnoton);

            connectorAnnoton.state = ConnectorState.editing;
            connectorAnnoton.type = ConnectorType.basic;
            connectorAnnoton.rule.r1Edge = causalEdge;
            connectorAnnoton.predicate = new Predicate(causalEdge, evidence);
            connectorAnnoton.setRule();
            connectorAnnoton.createGraph();
            connectorAnnotons.push(connectorAnnoton);
          } else if (objectInfo.hasRootType(EntityDefinition.GoBiologicalProcess)) {
            const processNodeInfo = self.nodeToAnnotonNode(cam.graph, objectId);

            const processNode = EntityDefinition.generateBaseTerm([EntityDefinition.GoBiologicalProcess], { id: 'process', isKey: true });
            const connectorAnnotonDTO = this._getConnectAnnotonIntermediate(cam, objectId);

            if (connectorAnnotonDTO.downstreamAnnoton) {
              processNode.uuid = objectId;
              processNode.term = processNodeInfo.term;
              // processNode.setEvidence(self.edgeToEvidence(cam.graph, e));

              const connectorAnnoton = this.pantherFormConfigService.createAnnotonConnectorModel(subjectAnnoton, connectorAnnotonDTO.downstreamAnnoton, processNode, connectorAnnotonDTO.hasInputNode);

              connectorAnnoton.state = ConnectorState.editing;
              connectorAnnoton.type = ConnectorType.intermediate;
              connectorAnnoton.rule.r1Edge = new Entity(causalEdge.id, causalEdge.label);
              connectorAnnoton.rule.r2Edge = connectorAnnotonDTO.rule.r2Edge;
              connectorAnnoton.predicate = new Predicate(causalEdge, evidence);
              connectorAnnoton.setRule();
              connectorAnnoton.createGraph();
              connectorAnnotons.push(connectorAnnoton);
            }
          }
        }
      });
    });

    return connectorAnnotons;
  }

  graphToAnnotonDFSError(annoton, annotonNode) {
    const self = this;
    const edge = annoton.getEdges(annotonNode.id);

    each(edge.nodes, function (node) {
      node.object.status = 2;
      self.graphToAnnotonDFSError(annoton, node.object);
    });
  }

  evidenceUseGroups(reqs, evidence: Evidence) {
    const self = this;
    const assignedBy = evidence.assignedBy;

    if (assignedBy) {
      reqs.use_groups(['http://purl.obolibrary.org/go/groups/' + assignedBy]);
    } else if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
      reqs.use_groups([self.pantherUserService.user.group.id]);
    } else {
      reqs.use_groups([]);
    }
  }

  saveModelGroup(cam: Cam, groupId) {
    cam.manager.use_groups([groupId]);
    cam.groupId = groupId;
  }


  resetModel(cam: Cam) {
    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);

    reqs.reset_model(cam.id);
    return cam.manager.request_with(reqs);
  }

  diffModel(cam: Cam) {
    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);
    const req = new minerva_requests.request('model', 'diff');
    req.model(cam.id);
    reqs.add(req, 'query');

    return cam.manager.request_with(reqs);
  }

  storedModel(cam: Cam) {
    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);
    const req = new minerva_requests.request('model', 'stored-model');
    req.model(cam.id);
    reqs.add(req, 'query');

    return cam.manager.request_with(reqs);
  }

  saveCamAnnotations(cam: Cam, annotations) {
    const self = this;

    const titleAnnotations = cam.graph.get_annotations_by_key('title');
    const stateAnnotations = cam.graph.get_annotations_by_key('state');
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);

    each(titleAnnotations, function (annotation) {
      reqs.remove_annotation_from_model('title', annotation.value());
    });

    each(stateAnnotations, function (annotation) {
      reqs.remove_annotation_from_model('state', annotation.value());
    });

    reqs.add_annotation_to_model('title', annotations.title);
    reqs.add_annotation_to_model('state', annotations.state);

    reqs.store_model(cam.id);
    cam.manager.request_with(reqs);
  }

  saveAnnoton(cam: Cam, triples: Triple<AnnotonNode>[], title) {
    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.model.id);

    if (!cam.title) {
      reqs.add_annotation_to_model('title', title);
    }

    self.addFact(reqs, triples);

    if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
      reqs.use_groups([self.pantherUserService.user.group.id]);
    }

    reqs.store_model(cam.id);
    return cam.manager.request_with(reqs);

  }

  editAnnoton(cam: Cam,
    srcNodes: AnnotonNode[],
    destNodes: AnnotonNode[],
    srcTriples: Triple<AnnotonNode>[],
    destTriples: Triple<AnnotonNode>[],
    removeIds: string[],
    removeTriples: Triple<AnnotonNode>[]) {

    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);

    each(destNodes, function (destNode: AnnotonNode) {
      const srcNode = find(srcNodes, (node: AnnotonNode) => {
        return node.uuid === destNode.uuid;
      });

      if (srcNode) {
        self.editIndividual(reqs, cam, srcNode, destNode);
      }
    });

    self.editFact(reqs, srcTriples, destTriples);
    self.addFact(reqs, destTriples);

    each(removeTriples, function (triple: Triple<AnnotonNode>) {
      reqs.remove_fact([
        triple.subject.uuid,
        triple.object.uuid,
        triple.predicate.edge.id
      ]);
    });

    each(removeIds, function (uuid: string) {
      reqs.remove_individual(uuid);
    });

    if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
      reqs.use_groups([self.pantherUserService.user.group.id]);
    }

    reqs.store_model(cam.id);
    return cam.manager.request_with(reqs);
  }

  replaceAnnoton(manager, modelId, entities: Entity[], replaceWithTerm: Entity) {

    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, modelId);

    each(entities, function (entity: Entity) {
      self.replaceIndividual(reqs, modelId, entity, replaceWithTerm);
    });

    // self.editFact(reqs, cam, srcTriples, destTriples);

    if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
      reqs.use_groups([self.pantherUserService.user.group.id]);
    }

    // reqs.store_model(modelId);
    return manager.request_with(reqs);
  }


  bulkEditAnnoton(cam: Cam, store = false) {
    const self = this;
    const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.id);
    each(cam.annotons, (annoton: Annoton) => {
      each(annoton.nodes, (node: AnnotonNode) => {
        self.bulkEditIndividual(reqs, cam, node);
        //self.bulkEditFact(reqs, cam, srcTriples, destTriples);
        //  self.bulkAddFact(reqs, destTriples);

      });
    });


    if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
      reqs.use_groups([self.pantherUserService.user.group.id]);
    }

    if (store) {
      reqs.store_model(cam.id);
    }
    return cam.manager.request_with(reqs);
  }

  deleteAnnoton(cam: Cam, uuids: string[], triples: Triple<AnnotonNode>[]) {
    const self = this;

    const success = () => {
      const reqs = new minerva_requests.request_set(self.pantherUserService.baristaToken, cam.model.id);

      each(triples, function (triple: Triple<AnnotonNode>) {
        reqs.remove_fact([
          triple.subject.uuid,
          triple.object.uuid,
          triple.predicate.edge.id
        ]);
      });

      each(uuids, function (uuid: string) {
        reqs.remove_individual(uuid);
      });

      reqs.store_model(cam.id);

      if (self.pantherUserService.user && self.pantherUserService.user.groups.length > 0) {
        reqs.use_groups([self.pantherUserService.user.group.id]);
      }

      return cam.manager.request_with(reqs);
    };

    return success();
  }

  private _graphToAnnotonDFS(cam: Cam, annoton: Annoton, bbopEdges, subjectNode: AnnotonNode) {
    const self = this;

    each(bbopEdges, (bbopEdge) => {
      const bbopPredicateId = bbopEdge.predicate_id();
      const bbopObjectId = bbopEdge.object_id();
      const evidence = self.edgeToEvidence(cam.graph, bbopEdge);
      const partialObjectNode = self.nodeToAnnotonNode(cam.graph, bbopObjectId);
      const objectNode = this._insertNode(annoton, bbopPredicateId, subjectNode, partialObjectNode);

      annoton.updateEntityInsertMenu();

      if (objectNode) {
        const triple: Triple<AnnotonNode> = annoton.getEdge(subjectNode.id, objectNode.id);
        if (triple) {
          triple.object.uuid = partialObjectNode.uuid;
          triple.object.term = partialObjectNode.term;
          triple.object.classExpression = partialObjectNode.classExpression;
          triple.object.setIsComplement(partialObjectNode.isComplement);
          triple.predicate.evidence = evidence;
          triple.predicate.uuid = bbopEdge.id();
          self._graphToAnnotonDFS(cam, annoton, cam.graph.get_edges_by_subject(bbopObjectId), triple.object);
        }
      }
    });

    return annoton;
  }

  private _insertNode(annoton: Annoton, bbopPredicateId: string, subjectNode: AnnotonNode,
    partialObjectNode: Partial<AnnotonNode>): AnnotonNode {
    const nodeDescriptions: ModelDefinition.InsertNodeDescription = subjectNode.canInsertNodes;
    let objectNode;

    each(nodeDescriptions, (nodeDescription: ModelDefinition.InsertNodeDescription) => {
      if (bbopPredicateId === nodeDescription.predicate.id) {
        if (partialObjectNode.hasRootTypes(nodeDescription.node.category)) {
          objectNode = ModelDefinition.insertNode(annoton, subjectNode, nodeDescription);
          return false;
        }
      }
    });

    return objectNode;
  }

  private _getConnectAnnotonIntermediate(cam: Cam, bpSubjectId: string): ConnectorAnnoton {
    const self = this;
    const connectorAnnoton = new ConnectorAnnoton();

    each(cam.graph.get_edges_by_subject(bpSubjectId), (e) => {
      const predicateId = e.predicate_id();
      const objectId = e.object_id();
      const objectInfo = self.nodeToAnnotonNode(cam.graph, objectId);

      const causalEdge = <Entity>find(pantherFormConfig.causalEdges, {
        id: predicateId
      });

      if (causalEdge) {
        if (objectInfo.hasRootType(EntityDefinition.GoMolecularFunction)) {
          const downstreamAnnoton = cam.getAnnotonByConnectionId(objectId);

          connectorAnnoton.rule.r2Edge = new Entity(causalEdge.id, causalEdge.label);;
          connectorAnnoton.downstreamAnnoton = downstreamAnnoton;
        }
      }

      if (e.predicate_id() === pantherFormConfig.edge.hasInput.id) {
        if (objectInfo.hasRootType(EntityDefinition.GoChemicalEntity)) {
          const hasInputNodeInfo = self.nodeToAnnotonNode(cam.graph, objectId);
          const hasInputNode = EntityDefinition.generateBaseTerm([EntityDefinition.GoChemicalEntity], { id: 'has-input', isKey: true });

          hasInputNode.uuid = objectId;
          hasInputNode.term = hasInputNodeInfo.term;
          hasInputNode.predicate.setEvidence(self.edgeToEvidence(cam.graph, e));
          connectorAnnoton.hasInputNode = hasInputNode;
        }
      }
    });

    return connectorAnnoton;
  }

  addFact(reqs, triples: Triple<AnnotonNode>[]) {
    const self = this;

    each(triples, function (triple: Triple<AnnotonNode>) {
      const subject = self.addIndividual(reqs, triple.subject);
      const object = self.addIndividual(reqs, triple.object);

      if (subject && object) {
        triple.predicate.uuid = reqs.add_fact([
          subject,
          object,
          triple.predicate.edge.id
        ]);

        each(triple.predicate.evidence, function (evidence: Evidence) {
          const evidenceReference = evidence.reference;
          const evidenceWith = evidence.with;

          reqs.add_evidence(evidence.evidence.id, evidenceReference, evidenceWith, triple.predicate.uuid);
        });
      }
    });
  }

  editFact(reqs, srcTriples: Triple<AnnotonNode>[], destTriples: Triple<AnnotonNode>[]) {

    each(destTriples, (destTriple: Triple<AnnotonNode>) => {

      const srcTriple = find(srcTriples, (triple: Triple<AnnotonNode>) => {
        return triple.subject.uuid === destTriple.subject.uuid && triple.object.uuid === destTriple.object.uuid;
      });

      if (srcTriple) {
        reqs.remove_fact([
          srcTriple.subject.uuid,
          srcTriple.object.uuid,
          srcTriple.predicate.edge.id
        ]);
      }
    });
  }

  deleteFact(reqs, triples: Triple<AnnotonNode>[]) {
    const self = this;

    each(triples, function (triple: Triple<AnnotonNode>) {
      each(triple.predicate.evidence, function (evidence: Evidence) {
        reqs.remove_individual(evidence.uuid);
      });
      reqs.remove_individual(triple.subject.uuid);
    });
  }

  addIndividual(reqs: any, node: AnnotonNode): string | null {
    if (node.uuid) {
      return node.uuid;
    }

    if (node.hasValue()) {
      if (node.isComplement) {
        const ce = new class_expression();
        ce.as_complement(node.term.id);
        node.uuid = reqs.add_individual(ce);
      } else {
        node.uuid = reqs.add_individual(node.term.id);
      }
      return node.uuid;
    }

    return null;
  }

  editIndividual(reqs, cam: Cam, srcNode, destNode) {
    if (srcNode.hasValue() && destNode.hasValue()) {
      reqs.remove_type_from_individual(
        srcNode.classExpression,
        srcNode.uuid,
        cam.id,
      );

      reqs.add_type_to_individual(
        class_expression.cls(destNode.getTerm().id),
        srcNode.uuid,
        cam.id,
      );
    }
  }

  bulkEditIndividual(reqs, cam: Cam, node: AnnotonNode) {
    if (node.hasValue() && node.term.modified) {
      reqs.remove_type_from_individual(
        node.classExpression,
        node.uuid,
        cam.id,
      );

      reqs.add_type_to_individual(
        class_expression.cls(node.getTerm().id),
        node.uuid,
        cam.id,
      );
    }
  }

  replaceIndividual(reqs, modelId: string, entity: Entity, replaceWithTerm: Entity) {
    reqs.remove_type_from_individual(
      class_expression.cls(entity.id),
      entity.uuid,
      modelId,
    );

    reqs.add_type_to_individual(
      class_expression.cls(replaceWithTerm.id),
      entity.uuid,
      modelId,
    );
  }

  deleteIndividual(reqs, node) {
    if (node.uuid) {
      reqs.remove_individual(node.uuid);
    }
  }

}