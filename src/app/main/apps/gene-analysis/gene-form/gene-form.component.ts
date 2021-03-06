import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';


import { GeneAnalysisService } from './../services/gene-analysis.service'
import { GeneAnalysisDialogService } from './../dialogs/services/dialog.service';

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
  geneMap;
  sectionRule;
  pantherTypes;
  organisms;
  selectedAnalysis;
  filteredOrganisms: Observable<any[]>;

  private unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute,
    private geneAnalysisDialogService: GeneAnalysisDialogService,
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

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openGeneMap() {
    this.geneAnalysisDialogService.openGeneMap(this.geneMap);
  }


  getGeneMap() {
    const self = this;

    let geneList = [];
    this.geneAnalysisService.getGeneMap(geneList).subscribe((response: any) => {
      this.geneMap = response;
      //  self.sectionRule = self.geneAnalysisService.generateFormRule(this.);
      //   this.geneAnalysisService.onGeneMapChanged.next(this.genes);
    });
  }

  search() {
    let searchCriteria = this.geneForm.value;

    console.dir(searchCriteria);

    /*
    this.geneAnalysisService.getGeneList(searchCriteria).subscribe((response: any) => {
      this.genes = response;
      console.dir(this.genes)
      this.geneAnalysisService.onGenesChanged.next(this.genes);
    });
    */

    this.geneAnalysisService.getOverrepList(searchCriteria).subscribe((response: any) => {
      this.geneAnalysisService.onOverrepChanged.next(response);
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

  onFileChange(event, filesFormGroup: FormGroup) {
    let reader = new FileReader();
    let ids = filesFormGroup.controls.ids;

    //console.log(event, control)

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        //    this.geneForm.patchValue({
        //   file: reader.result
        //   });
        // console.log(reader.result)
        ids.setValue(reader.result);
        // this.cd.markForCheck();
      };
    }
  }

  onValueChanges() {
    const self = this;


    this.geneForm.valueChanges.subscribe(form => {
      console.log(form)

      self.sectionRule = self.geneAnalysisService.generateFormRule(form);
    })

    this.filteredOrganisms = this.geneForm.controls.organism.valueChanges
      .pipe(
        startWith(''),
        map(organism => organism ? this._filterOrganisms(organism) : this.organisms.slice())
      )

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
