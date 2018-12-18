import { Component, Inject, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { pantherAnimations } from '@panther/animations';
import { PantherUtils } from '@panther/utils/panther-utils';

import { takeUntil } from 'rxjs/internal/operators';
import { forEach } from '@angular/router/src/utils/collection';

import { PantherTranslationLoaderService } from '@panther/services/translation-loader.service';
import { locale as english } from './i18n/en';

import { advancedSearchData } from './advanced-search.tokens';
import { AdvancedSearchOverlayRef } from './advanced-search-ref';
import { PantherSearchService } from '@panther.search/services/panther-search.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})

export class PantherAdvancedSearchComponent implements OnInit, OnDestroy {
  searchCriteria: any = {};
  searchForm: FormGroup;
  searchFormData: any = []
  cams: any[] = [];

  private unsubscribeAll: Subject<any>;

  constructor(private route: ActivatedRoute,
    public dialogRef: AdvancedSearchOverlayRef,
    @Inject(advancedSearchData) public data: any,
    private pantherSearchService: PantherSearchService,
    private pantherTranslationLoader: PantherTranslationLoaderService) {
    this.pantherTranslationLoader.loadTranslations(english);
    this.searchForm = this.createAnswerForm();

    this.unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

  }

  cancel() {
    this.dialogRef.close();
  }

  search() {
    let searchCriteria = this.searchForm.value;

    console.dir(searchCriteria)
  }

  createAnswerForm() {
    return new FormGroup({
      gp: new FormControl(),
      ontology: new FormControl(),
      pathway: new FormControl(),
      pantherFamily: new FormControl(),
      species: new FormControl(),
    });
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
