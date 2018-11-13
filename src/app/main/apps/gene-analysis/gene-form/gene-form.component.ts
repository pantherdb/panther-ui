import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
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
  genes
  sectionRule;
  pantherTypes;
  organisms;
  selectedAnalysis;
  filteredOrganisms: Observable<any[]>;

  private unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute,
    private geneAnalysisService: GeneAnalysisService,
    private formBuilder: FormBuilder) {
    this.unsubscribeAll = new Subject();

    this.sectionRule = this.geneAnalysisService.sectionRule;

    this.pantherTypes = this.geneAnalysisService.pantherTypes;
    this.organisms = this.geneAnalysisService.organisms;

    this.geneForm = this.createGeneForm();

    this.onValueChanges();
  }

  ngOnInit(): void {
  }

  search() {
    let searchCriteria = this.geneForm.value;

    console.dir(searchCriteria);

    this.geneAnalysisService.getGeneList(searchCriteria).subscribe((response: any) => {
      this.genes = response;
      console.dir(this.genes)
      this.geneAnalysisService.onGenesChanged.next(this.genes);
    });

  }

  createGeneForm() {
    let geneForm: FormGroup = new FormGroup({
      ids: new FormControl(),
      analysis: new FormControl(),
      organism: new FormControl(),
      list: new FormGroup({
        analysis: new FormArray([]),
        reference: new FormArray([]),
      }),
      dataColumns: this.buildDataColumnsForm(),
      analysisTest: new FormControl(),
      analysisCorrection: new FormControl(),
      chartType: new FormControl(),
    });

    this.addIDsFormGroup(geneForm.controls['list']['controls']['analysis'] as FormArray);
    this.addIDsFormGroup(geneForm.controls['list']['controls']['reference'] as FormArray)

    return geneForm;
  }



  addIDsFormGroup(listGroup: FormArray) {
    const self = this;

    listGroup.push(new FormGroup({
      ids: new FormControl(),
      browse: new FormControl(),
    }));
  }

  buildDataColumnsForm() {
    const arr = this.pantherTypes.dataColumns.map(dataColumn => {
      return new FormControl(dataColumn.selected);
    });

    return new FormArray(arr);
  }

  addOverrepList() {
    this.addIDsFormGroup(this.geneForm.controls['list']['controls']['analysis'] as FormArray);
  }

  private _filterOrganisms(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.organisms.filter(organism => organism.short_name.toLowerCase().indexOf(filterValue) === 0);
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

      self.sectionRule = self.geneAnalysisService.generateDisplayRule(data);
    })

  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
