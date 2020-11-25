import { Injector, Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs'
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms'

//Config
import { pantherFormConfig } from './../panther-form-config';
import { PantherFormConfigService } from './config/panther-form-config.service';
import { PantherLookupService } from './lookup.service';
import { CamService } from './../services/cam.service';


declare const require: any;
const each = require('lodash/forEach');

import {
  Cam,
  Triple,
  AnnotonNode
} from './../models/annoton';
import { } from './../models/annoton/annoton-node';


import { TripleForm } from './../models/forms';
import { AnnotonFormMetadata } from './../models/forms/annoton-form-metadata';

@Injectable({
  providedIn: 'root'
})
export class PantherTripleFormService {
  cam: Cam;
  public triple: Triple<AnnotonNode>;
  private tripleForm: TripleForm;
  private tripleFormGroup: BehaviorSubject<FormGroup | undefined>;
  public tripleFormGroup$: Observable<FormGroup>;

  constructor(private _fb: FormBuilder, public pantherFormConfigService: PantherFormConfigService,
    private camService: CamService,
    private pantherLookupService: PantherLookupService) {

    this.tripleFormGroup = new BehaviorSubject(null);
    this.tripleFormGroup$ = this.tripleFormGroup.asObservable()

    this.camService.onCamChanged.subscribe((cam) => {
      if (!cam) return;

      this.cam = cam;
    });
  }

  initializeForm(triple: Triple<AnnotonNode>) {
    this.triple = triple;
    this.tripleForm = this.createTripleForm(triple);
    this.tripleFormGroup.next(this._fb.group(this.tripleForm));
    this._onAnnotonFormChanges();
  }

  createTripleForm(triple: Triple<AnnotonNode>) {
    const self = this;
    const formMetadata = new AnnotonFormMetadata(self.pantherLookupService.lookupFunc.bind(self.pantherLookupService));

    const tripleForm = new TripleForm(formMetadata);

    tripleForm.createTripleForm(triple);

    return tripleForm;
  }

  tripleFormToAnnoton() {
    const self = this;

    // self.tripleForm.populateAnnotonEntityForm(this.termNode);
  }

  private _onAnnotonFormChanges(): void {
    this.tripleFormGroup.getValue().valueChanges.subscribe(value => {
      // this.errors = this.getAnnotonFormErrors();
      this.tripleFormToAnnoton();
    });
  }

  clearForm() {
  }
}

