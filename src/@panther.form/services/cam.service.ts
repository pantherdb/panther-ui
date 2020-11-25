import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurieService } from './../../@panther.curie/services/curie.service';
import { PantherGraphService } from './../services/graph.service';
import { PantherFormConfigService } from './../services/config/panther-form-config.service';
import { PantherLookupService } from './lookup.service';
import { PantherUserService } from './user.service';
import { Annoton } from './../models/annoton/annoton';
import { CamForm } from './../models/forms/cam-form';
import { AnnotonFormMetadata } from './../models/forms/annoton-form-metadata';
import { Evidence, compareEvidence } from './../models/annoton/evidence';

import { v4 as uuid } from 'uuid';
import { Cam, CamStats } from './../models/annoton/cam';
import { uniqWith, each } from 'lodash';
import { AnnotonNodeType, AnnotonNode, Entity } from './../models/annoton';
import { compareTerm } from './../models/annoton/annoton-node';

@Injectable({
  providedIn: 'root'
})
export class CamService {
  curieUtil: any;
  loading = false;
  cam: Cam;
  onCamChanged: BehaviorSubject<any>;
  onCamTermsChanged: BehaviorSubject<any>;


  public annoton: Annoton;
  private camForm: CamForm;
  private camFormGroup: BehaviorSubject<FormGroup | undefined>;
  public camFormGroup$: Observable<FormGroup>;


  constructor(public pantherFormConfigService: PantherFormConfigService,
    private _fb: FormBuilder,
    private pantherUserService: PantherUserService,
    private pantherGraphService: PantherGraphService,
    private pantherLookupService: PantherLookupService,
    private _pantherGraphService: PantherGraphService,
    private curieService: CurieService) {
    this.onCamChanged = new BehaviorSubject(null);
    this.onCamTermsChanged = new BehaviorSubject(null);
    this.curieUtil = this.curieService.getCurieUtil();
    this.camFormGroup = new BehaviorSubject(null);
    this.camFormGroup$ = this.camFormGroup.asObservable();
  }

  initializeForm(cam?: Cam) {
    const self = this;

    if (cam) {
      this.cam = cam;
    }

    self.camForm = this.createCamForm();
    self.camFormGroup.next(this._fb.group(this.camForm));
  }

  createCamForm() {
    const self = this;

    const formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
    const camForm = new CamForm(formMetadata);

    camForm.createCamForm(this.cam, this.pantherUserService.user);

    return camForm;
  }

  getCam(modelId): Cam {
    const cam: Cam = new Cam();

    cam.loading.status = true;
    cam.loading.message = 'Sending Request...';

    //cam.id = uuid();
    cam.graph = null;
    cam.model = Object.assign({}, {
      id: modelId,
      title: '',
      modelInfo: this.pantherFormConfigService.getModelUrls(modelId)
    });
    cam.expanded = true;
    this.pantherGraphService.getGraphInfo(cam, modelId);
    this.cam = cam;
    this.onCamChanged.next(cam);

    return cam;
  }

  loadCam(cam: Cam, filter?: any) {
    cam.loading.status = true;
    cam.loading.message = 'Sending Request...';
    cam.graph = null;
    cam.modified = false;
    cam.modifiedStats = new CamStats();
    cam.model = Object.assign({}, {
      id: cam.id,
      title: '',
      modelInfo: this.pantherFormConfigService.getModelUrls(cam.id)
    });

    if (filter) {
      cam.filter = filter;
    }
    this.pantherGraphService.getGraphInfo(cam, cam.id);
    this.cam = cam;
  }

  deleteAnnoton(annoton: Annoton) {
    const self = this;
    const deleteData = annoton.createDelete();

    return self.pantherGraphService.deleteAnnoton(self.cam, deleteData.uuids, deleteData.triples);
  }

  updateTermList(formAnnoton: Annoton, entity: AnnotonNode) {
    this.pantherLookupService.termList = this.getUniqueTerms(formAnnoton);
    entity.termLookup.results = this.pantherLookupService.termPreLookup(entity.type);
  }

  updateEvidenceList(formAnnoton: Annoton, entity: AnnotonNode) {
    this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
    entity.predicate.evidenceLookup.results = this.pantherLookupService.evidencePreLookup();
  }

  updateReferenceList(formAnnoton: Annoton, entity: AnnotonNode) {
    this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
    entity.predicate.referenceLookup.results = this.pantherLookupService.referencePreLookup();
  }

  updateWithList(formAnnoton: Annoton, entity: AnnotonNode) {
    this.pantherLookupService.evidenceList = this.getUniqueEvidence(formAnnoton);
    entity.predicate.withLookup.results = this.pantherLookupService.withPreLookup();
  }

  getNodesByType(annotonType: AnnotonNodeType): any[] {
    return this.cam.getNodesByType(annotonType);
  }

  getNodesByTypeFlat(annotonType: AnnotonNodeType): AnnotonNode[] {
    return this.cam.getNodesByTypeFlat(annotonType);
  }


  getUniqueTerms(formAnnoton?: Annoton): AnnotonNode[] {
    const annotonNodes = this.cam.getTerms(formAnnoton);
    const result = uniqWith(annotonNodes, compareTerm);

    return result;
  }

  getUniqueEvidence(formAnnoton?: Annoton): Evidence[] {
    const evidences = this.cam.getEvidences(formAnnoton);
    const result = uniqWith(evidences, compareEvidence);

    return result;
  }

  diffModel(cam: Cam) {
    const self = this;

    return self._pantherGraphService.diffModel(cam);
  }

  storedModel(cam: Cam) {
    const self = this;

    return self._pantherGraphService.storedModel(cam);
  }


  bulkEdit(cam: Cam) {
    const self = this;

    return self._pantherGraphService.bulkEditAnnoton(cam);
  }

  reviewChanges(cam: Cam, stats: CamStats) {
    const terms = cam.reviewTermChanges(stats);

    if (terms.length > 0) {
      return {
        terms: terms
      };
    }

    return null;
  }
}
