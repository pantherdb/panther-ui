import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PantherFormConfigService } from './config/panther-form-config.service';
import { PantherLookupService } from './lookup.service';
import { CamService } from './../services/cam.service';
import { Cam } from './../models/annoton/cam';
import { EntityForm } from './../models/forms/entity-form';
import { AnnotonFormMetadata } from './../models/forms/annoton-form-metadata';
import { AnnotonNode, Annoton } from '../models';
import { PantherGraphService } from './graph.service';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PantherAnnotonEntityService {
  public cam: Cam;
  public currentAnnoton: Annoton;
  public annoton: Annoton;
  public entity: AnnotonNode;
  private entityForm: EntityForm;
  private entityFormGroup: BehaviorSubject<FormGroup | undefined>;
  public entityFormGroup$: Observable<FormGroup>;

  constructor(private _fb: FormBuilder,
    public pantherFormConfigService: PantherFormConfigService,
    private pantherGraphService: PantherGraphService,
    private camService: CamService,
    private pantherLookupService: PantherLookupService) {

    this.entityFormGroup = new BehaviorSubject(null);
    this.entityFormGroup$ = this.entityFormGroup.asObservable();
    this.camService.onCamChanged.subscribe((cam) => {
      if (!cam) {
        return;
      }

      this.cam = cam;
    });
  }

  initializeForm(annoton: Annoton, entity: AnnotonNode) {
    this.currentAnnoton = cloneDeep(annoton);
    this.annoton = annoton;
    this.entity = entity;
    this.entityForm = this.createAnnotonEntityForm(this.entity);
    this.entityFormGroup.next(this._fb.group(this.entityForm));
    this._onAnnotonFormChanges();
  }

  createAnnotonEntityForm(entity: AnnotonNode) {
    const self = this;
    const formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));
    const entityForm = new EntityForm(formMetadata, entity);

    if (!entity.skipEvidence) {
      entityForm.createEvidenceForms(entity);
    }

    return entityForm;
  }

  annotonEntityFormToAnnoton() {
    const self = this;

    self.entityForm.populateTerm();
  }

  private _onAnnotonFormChanges(): void {
    this.entityFormGroup.getValue().valueChanges.subscribe(() => {
      // this.errors = this.getAnnotonFormErrors();
      //  this.annotonEntityFormToAnnoton();
      // this.annoton.enableSubmit();
    });
  }

  saveAnnoton() {
    const self = this;

    self.annotonEntityFormToAnnoton();
    const saveData = self.annoton.createEdit(self.currentAnnoton);

    return self.pantherGraphService.editAnnoton(self.cam,
      saveData.srcNodes,
      saveData.destNodes,
      saveData.srcTriples,
      saveData.destTriples,
      saveData.removeIds,
      saveData.removeTriples);
  }

  saveAnnotonInternal() {
    const self = this;

    self.annotonEntityFormToAnnoton();
    const saveData = self.annoton.createEdit(self.currentAnnoton);

    return self.pantherGraphService.editAnnoton(self.cam,
      saveData.srcNodes,
      saveData.destNodes,
      saveData.srcTriples,
      saveData.destTriples,
      saveData.removeIds,
      saveData.removeTriples);
  }

  searchModels() {
    const self = this;

    self.annotonEntityFormToAnnoton();
    const saveData = self.annoton.createEdit(self.currentAnnoton);
  }

  clearForm() {
  }
}

