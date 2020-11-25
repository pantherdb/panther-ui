import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';

import { SnpScoringService } from './services/snp-scoring.service';

@Component({
  selector: 'panther-snp-scoring',
  templateUrl: './snp-scoring.component.html',
  styleUrls: ['./snp-scoring.component.scss']
})
export class SnpScoringComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;
  snpScoringForm: FormGroup;
  organisms;
  filteredOrganisms: Observable<any[]>;

  constructor(
    private snpScoringService: SnpScoringService,
    public pantherSearchMenuService: PantherSearchMenuService) {

    this._unsubscribeAll = new Subject();

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

    this.filteredOrganisms = this.snpScoringForm.controls.organism.valueChanges
      .pipe(
        startWith(''),
        map(organism => organism ? this._filterOrganisms(organism) : this.organisms.slice())
      )
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

