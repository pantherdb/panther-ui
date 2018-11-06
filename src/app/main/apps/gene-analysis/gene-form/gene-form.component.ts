import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';


import { GeneAnalysisService } from './../services/gene-analysis.service'

import * as _ from 'lodash';
declare const require: any;
const each = require('lodash/forEach');

import { pantherAnimations } from '@panther/animations';

@Component({
  selector: 'pthr-gene-form',
  templateUrl: './gene-form.component.html',
  styleUrls: ['./gene-form.component.scss'],
})

export class GeneFormComponent implements OnInit, OnDestroy {
  geneForm: FormGroup;
  analysisTypes;
  dataColumns
  organisms;
  selectedAnalysis;
  filteredOrganisms: Observable<any[]>;

  private unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute,
    private geneAnalysisService: GeneAnalysisService,
    private formBuilder: FormBuilder) {
    this.unsubscribeAll = new Subject();

    this.analysisTypes = this.geneAnalysisService.analysisTypes;
    this.dataColumns = this.geneAnalysisService.dataColumns;
    this.organisms = this.geneAnalysisService.organisms;

    this.geneForm = this.createAnswerForm();

    this.onValueChanges();

  }

  ngOnInit(): void {
  }

  search() {
    let searchCriteria = this.geneForm.value;

    console.dir(searchCriteria)
  }

  createAnswerForm() {
    let geneForm: FormGroup = new FormGroup({
      ids: new FormControl(),
      analysis: new FormControl(),
      organism: new FormControl(),
      functionalClassification: new FormArray([]),
      overrep: new FormArray([]),
      dataColumns: this.buildSkills()
    });

    this.addIDsFormGroup(geneForm.controls['functionalClassification'] as FormArray)
    this.addIDsFormGroup(geneForm.controls['overrep'] as FormArray)

    return geneForm;
  }

  addIDsFormGroup(listGroup: FormArray) {
    const self = this;

    listGroup.push(new FormGroup({
      ids: new FormControl(),
      browse: new FormControl(),
    }));
  }

  buildSkills() {
    const arr = this.dataColumns.map(dataColumn => {
      return new FormControl(dataColumn.selected);
    });

    return new FormArray(arr);
  }

  addOverrepList() {
    this.addIDsFormGroup(this.geneForm.controls['overrep'] as FormArray)
  }

  private _filterOrganisms(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.organisms.filter(organism => organism.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onValueChanges() {
    const self = this;

    this.filteredOrganisms = this.geneForm.controls.organism.valueChanges
      .pipe(
        startWith(''),
        map(organism => organism ? this._filterOrganisms(organism) : this.organisms.slice())
      );

    this.geneForm.controls.analysis.valueChanges.subscribe(data => {
      console.log(data)
      self.selectedAnalysis = data;
    })

  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
