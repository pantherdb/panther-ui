
import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { SnpScoringService } from './../services/snp-scoring.service';

@Component({
  selector: 'pthr-snp-scoring-form',
  templateUrl: './snp-scoring-form.component.html',
  styleUrls: ['./snp-scoring-form.component.scss']
})
export class SnpScoringFormComponent implements OnInit {
  private unsubscribeAll: Subject<any>;
  snpScoringForm: FormGroup;
  organisms;
  filteredOrganisms: Observable<any[]>;

  constructor(private snpScoringService: SnpScoringService) {

    this.unsubscribeAll = new Subject();

    this.organisms = this.snpScoringService.organisms;
  }

  ngOnInit() {
    this.snpScoringForm = this.createSnpScoringForm();
  }

  private _filterOrganisms(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.organisms.filter(organism => organism.short_name.toLowerCase().indexOf(filterValue) === 0);
  }

  createSnpScoringForm() {
    return new FormGroup({
      proteinSequence: new FormControl(),
      substitution: new FormControl(),
      organism: new FormControl(),
    });
  }

  onValueChanges() {
    const self = this;

    this.filteredOrganisms = this.snpScoringForm.controls.organism.valueChanges
      .pipe(
        startWith(''),
        map(organism => organism ? this._filterOrganisms(organism) : this.organisms.slice())
      )
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}

