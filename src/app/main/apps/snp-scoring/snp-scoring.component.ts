import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, FormControlDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

import { SnpScoringService } from './services/snp-scoring.service';

@Component({
  selector: 'pthr-snp-scoring',
  templateUrl: './snp-scoring.component.html',
  styleUrls: ['./snp-scoring.component.scss']
})
export class SnpScoringComponent implements OnInit {
  private unsubscribeAll: Subject<any>;
  snpScoringForm: FormGroup;
  organisms;
  filteredOrganisms: Observable<any[]>;

  constructor(private snpScoringService: SnpScoringService,
    public pantherMenuService: PantherMenuService) {

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

