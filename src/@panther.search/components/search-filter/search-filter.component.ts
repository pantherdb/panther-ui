import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, Subject } from 'rxjs';
import { startWith, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PantherSearchService } from './../../services/panther-search.service';
import { PantherSearchMenuService } from '../../services/search-menu.service';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'panther-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SearchFilterComponent implements OnInit, OnDestroy {

  @ViewChildren('searchInput')
  searchInput: QueryList<ElementRef>;
  searchCriteria: any = {};
  isExactDate = true;
  filterForm: FormGroup;
  selectedOrganism = {};
  searchFormData: any = [];
  genes: any[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredOrganisms: Observable<any[]>;
  filteredGroups: Observable<any[]>;
  filteredContributors: Observable<any[]>;
  filteredStates: Observable<any[]>;

  private _unsubscribeAll: Subject<any>;

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService,
    public pantherSearchService: PantherSearchService) {

    this._unsubscribeAll = new Subject();
    this.filterForm = this.createAnswerForm();
    this._onValueChanges();
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  createAnswerForm() {
    return new FormGroup({
      ids: new FormControl(),
      gps: new FormControl(),
      terms: new FormControl(),
    });
  }

  termDisplayFn(term): string | undefined {
    return term && term.id ? `${term.label} (${term.id})` : undefined;
  }

  evidenceDisplayFn(evidence): string | undefined {
    return evidence && evidence.id ? `${evidence.label} (${evidence.id})` : undefined;
  }

  close() {
    this.pantherSearchMenuService.closeLeftDrawer();
  }

  clear() {
    this.pantherSearchService.clearSearchCriteria();
    this.searchInput.forEach((item) => {
      item.nativeElement.value = null;
    });
  }

  add(event: MatChipInputEvent, filterType): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.pantherSearchService.searchCriteria[filterType].push(value.trim());
      this.pantherSearchService.updateSearch();
      this.searchInput.forEach((item) => {
        item.nativeElement.value = null;
      });
      this.filterForm.controls[filterType].setValue('');
    }

    if (input) {
      input.value = '';
    }
  }

  remove(item, filterType): void {
    const index = this.pantherSearchService.searchCriteria[filterType].indexOf(item);

    if (index >= 0) {
      this.pantherSearchService.searchCriteria[filterType].splice(index, 1);
      this.pantherSearchService.updateSearch();
    }
  }

  selected(event: MatAutocompleteSelectedEvent, filterType): void {
    this.pantherSearchService.searchCriteria[filterType].push(event.option.value);
    this.pantherSearchService.updateSearch();

    this.searchInput.forEach((item) => {
      item.nativeElement.value = null;
    });

    this.filterForm.controls[filterType].setValue('');
  }


  downloadFilter() {
    this.pantherSearchService.downloadSearchConfig();
  }

  private _onValueChanges() {
    const self = this;

    this.filterForm.get('terms').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {

    });


  }
}
