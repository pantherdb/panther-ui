declare const require: any;
const uuid = require('uuid/v1');
import { Edge as NgxEdge, Node as NgxNode } from '@swimlane/ngx-graph';
import { pantherFormConfig } from './../../panther-form-config';
import { SaeGraph } from './sae-graph';
import { getEdges, Edge, getNodes, subtractNodes, subtractEdges } from './panther-form-graph';

import { Annoton } from './annoton';
import { AnnotonNode } from './annoton-node';
import { ConnectorRule } from './rules';
import { Entity } from './entity';
import { Triple } from './triple';
import { Evidence } from './evidence';
import { Predicate } from './predicate';
import { cloneDeep, findIndex, find } from 'lodash';

export enum ConnectorState {
  creation = 1,
  editing
}

export enum ConnectorType {
  basic = 1,
  intermediate
}

export class ConnectorAnnoton extends SaeGraph<AnnotonNode> {
  id: string;
  upstreamAnnoton: Annoton;
  downstreamAnnoton: Annoton;
  upstreamNode: AnnotonNode;
  downstreamNode: AnnotonNode;
  processNode: AnnotonNode;
  hasInputNode: AnnotonNode;
  predicate: Predicate;
  state: ConnectorState;
  type: ConnectorType = ConnectorType.basic;
  rule: ConnectorRule;

  graphPreview = {
    nodes: [],
    edges: []
  };

  constructor(upstreamNode?: AnnotonNode, downstreamNode?: AnnotonNode, state?: ConnectorState) {
    super();
    this.id = uuid();

    this.upstreamNode = upstreamNode;
    this.downstreamNode = downstreamNode;
    this.state = state ? state : ConnectorState.creation;
    this.rule = new ConnectorRule();

    if (upstreamNode) {
      this.rule.subjectMFCatalyticActivity.condition = upstreamNode.isCatalyticActivity;
      this.rule.objectMFCatalyticActivity.condition = downstreamNode.isCatalyticActivity;
    }
  }

  setRule() {
    const self = this;

    const question = self.getEffectDirectionByEdge(self.rule.r1Edge);

    self.rule.effectDirection.direction = question.effectDirection;
    self.rule.mechanism.mechanism = question.mechanism;

    if (self.type === ConnectorType.basic) {
      self.rule.displaySection.process = false;
    } else if (self.type === ConnectorType.intermediate) {
      self.rule.displaySection.process = true;
    }
  }

  checkConnection(value: any) {
    const self = this;

    self.rule.mechanism.mechanism = value.mechanism;
    self.rule.displaySection.causalEffect = true;

    if (value.mechanism === pantherFormConfig.mechanism.options.known) {
      self.rule.displaySection.process = true;
      self.type = ConnectorType.intermediate;
    } else {
      self.rule.displaySection.process = false;
      self.type = ConnectorType.basic;
    }

    if (value.process) {
      self.processNode.term = new Entity(value.process.id, value.process.label);
      self.rule.r2Edge = value.process.edge;
    }

    self.rule.r1Edge = this.getCausalConnectorEdge(
      value.causalEffect,
      value.mechanism);

    self.setPreview();
  }

  getEffectDirectionByEdge(edge) {
    let effectDirection = null;
    let mechanism = null;

    const index = findIndex(pantherFormConfig.causalEdges, { id: edge.id }) + 1;

    if (index < 10 && index > 0) {
      const x = (index % 3) - 3;
      const y = (index - x) / 3;
      effectDirection = find(pantherFormConfig.causalEffect.options, { scalar: x });
      mechanism = find(pantherFormConfig.mechanism.options, { scalar: y });
    }

    return { effectDirection, mechanism };
  }

  getCausalConnectorEdge(causalEffect, mechanism) {
    const self = this;
    let result;

    const index = causalEffect.scalar + (mechanism.scalar * 3) - 1;

    result = pantherFormConfig.causalEdges[index];
    return result;
  }

  setPreview() {
    this.graphPreview.nodes = [...this._getPreviewNodes()];
    this.graphPreview.edges = [...this._getPreviewEdges()];
  }

  private _getPreviewNodes(): NgxNode[] {
    const self = this;
    let nodes: NgxNode[] = [];

    let annotonNodes = [self.upstreamNode, self.downstreamNode];

    if (self.type === ConnectorType.intermediate) {
      annotonNodes.push(self.processNode);

      if (self.hasInputNode.hasValue()) {
        annotonNodes.push(self.hasInputNode)
      }
    }

    nodes = <NgxNode[]>annotonNodes.map((node: AnnotonNode) => {
      return {
        id: node.id,
        label: node.term.label ? node.term.label : '',
      };
    });

    return nodes;
  }

  copyValues(currentConnectorAnnoton: ConnectorAnnoton) {
    const self = this;

    self.processNode.term = cloneDeep(currentConnectorAnnoton.processNode.term);
    self.hasInputNode.term = cloneDeep(currentConnectorAnnoton.hasInputNode.term);
    self.rule = cloneDeep(currentConnectorAnnoton.rule);
    self.type = currentConnectorAnnoton.type;
    self.state = currentConnectorAnnoton.state;
  }

  createSave() {
    const self = this;
    const saveData = {
      title: '',
      nodes: [],
      triples: [],
      graph: null
    };

    const graph = self.getTrimmedGraph('upstream');
    const keyNodes = getNodes(graph);
    const edges: Edge<Triple<AnnotonNode>>[] = getEdges(graph);
    const triples: Triple<AnnotonNode>[] = edges.map((edge: Edge<Triple<AnnotonNode>>) => {
      return edge.metadata;
    });

    saveData.nodes = Object.values(keyNodes);
    saveData.triples = triples;
    saveData.graph = graph;

    return saveData;
  }

  createEdit(srcAnnoton: ConnectorAnnoton) {
    const self = this;
    const srcSaveData = srcAnnoton.createSave();
    const destSaveData = self.createSave();
    const saveData = {
      srcNodes: srcSaveData.nodes,
      destNodes: destSaveData.nodes,
      srcTriples: srcSaveData.triples,
      destTriples: destSaveData.triples,
      removeIds: subtractNodes(srcSaveData.graph, destSaveData.graph).map((node: AnnotonNode) => {
        return node.uuid;
      }),
      removeTriples: <Triple<AnnotonNode>[]>subtractEdges(srcSaveData.graph, destSaveData.graph)
    };

    return saveData;
  }

  createDelete() {
    const self = this;
    const uuids: string[] = [];

    const deleteData = {
      uuids: [],
      triples: [],
      nodes: []
    };

    if (this.type === ConnectorType.basic) {
      deleteData.triples.push(new Triple(self.upstreamNode, self.predicate, self.downstreamNode));
    } else if (this.type === ConnectorType.intermediate) {
      uuids.push(self.processNode.uuid);
      if (self.hasInputNode.hasValue()) {
        uuids.push(self.hasInputNode.uuid);
      }
    }

    deleteData.uuids = uuids;

    return deleteData;
  }

  createGraph(srcEvidence?: Evidence[]) {
    const self = this;
    const evidence = srcEvidence ? srcEvidence : self.predicate.evidence;

    if (this.type === ConnectorType.basic) {
      this.addNodes(self.upstreamNode, self.downstreamNode);
      self.addEdge(self.upstreamNode, self.downstreamNode, new Predicate(this.rule.r1Edge, evidence));
    } else if (this.type === ConnectorType.intermediate) {
      self.addNodes(self.upstreamNode, self.downstreamNode, self.processNode);
      self.addEdge(self.upstreamNode, self.processNode, new Predicate(this.rule.r1Edge, evidence));
      self.addEdge(self.processNode, self.downstreamNode, new Predicate(this.rule.r2Edge, evidence));
      if (this.hasInputNode.hasValue()) {
        self.addNodes(self.hasInputNode);
        self.addEdge(self.processNode, self.hasInputNode, new Predicate(new Entity(pantherFormConfig.edge.hasInput.id, pantherFormConfig.edge.hasInput.label), evidence));
      }
    }
  }

  prepareSave(value) {
    const self = this;

    const evidence: Evidence[] = value.evidenceFormArray.map((evidence: Evidence) => {
      const result = new Evidence();

      result.uuid = evidence.uuid;
      result.evidence = new Entity(evidence.evidence.id, evidence.evidence.label);
      result.reference = evidence.reference;
      result.with = evidence.with;

      return result;
    });

    if (this.type === ConnectorType.intermediate) {
      self.processNode.term = new Entity(value.process.id, value.process.label);
      self.hasInputNode.term = new Entity(value.hasInput.id, value.hasInput.label);
    }

    this.createGraph(evidence);
  }

  private _getPreviewEdges(): NgxEdge[] {
    const self = this;

    let edges: NgxEdge[] = [];

    if (self.type === ConnectorType.basic) {
      edges = <NgxEdge[]>[
        {
          source: 'upstream',
          target: 'downstream',
          label: self.rule.r1Edge ? self.rule.r1Edge.label : ''
        }];
    } else if (self.type === ConnectorType.intermediate) {
      edges = <NgxEdge[]>[
        {
          source: 'upstream',
          target: 'process',
          label: self.rule.r1Edge ? self.rule.r1Edge.label : ''
        }, {
          source: 'process',
          target: 'downstream',
          label: self.rule.r2Edge ? self.rule.r2Edge.label : ''
        }];
      if (this.hasInputNode.hasValue()) {
        edges.push({
          source: 'process',
          target: 'has-input',
          label: pantherFormConfig.edge.hasInput.label
        });
      }
    }

    return edges;
  }
}
