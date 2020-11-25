

import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';


import {
  Cam,
  AnnotonType,
  PantherUserService,
  PantherFormConfigService,
  PantherFormMenuService,
  PantherAnnotonFormService,
  pantherFormConfig,
  CamsService,
  AnnotonNode,
  EntityLookup,
  PantherLookupService,
  EntityDefinition,
  CamService,
  Entity
} from 'panther-form-base';

import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { pantherAnimations } from '@panther/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { PantherReviewSearchService } from '@panther.search/services/panther-review-search.service';
import { cloneDeep, groupBy } from 'lodash';
import { ArtReplaceCategory } from '@panther.search/models/review-mode';
import { PantherConfirmDialogService } from '@panther/components/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'panther-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  animations: pantherAnimations,
})
export class ReviewFormComponent implements OnInit, OnDestroy {
  AnnotonType = AnnotonType;
  ArtReplaceCategory = ArtReplaceCategory;

  searchForm: FormGroup;
  cams: Cam[] = [];

  displayReplaceForm = {
    replaceSection: false,
    replaceActions: false
  };


  pantherFormConfig = pantherFormConfig;

  categories: any;

  gpNode: AnnotonNode;
  termNode: AnnotonNode;
  termReplaceNode: AnnotonNode;
  selectedCategoryName;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private camService: CamService,
    private camsService: CamsService,
    private confirmDialogService: PantherConfirmDialogService,
    public pantherReviewSearchService: PantherReviewSearchService,
    public pantherUserService: PantherUserService,
    private pantherLookupService: PantherLookupService,
    public pantherFormConfigService: PantherFormConfigService,
    public pantherAnnotonFormService: PantherAnnotonFormService,
    public pantherFormMenuService: PantherFormMenuService) {

    this._unsubscribeAll = new Subject();

    this.categories = cloneDeep(this.pantherFormConfigService.findReplaceCategories);

    this.camsService.onCamsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(cams => {
        if (!cams) {
          return;
        }
        this.cams = cams;
      });

    this.gpNode = EntityDefinition.generateBaseTerm([EntityDefinition.GoMolecularEntity]);
    this.termNode = EntityDefinition.generateBaseTerm([
      EntityDefinition.GoMolecularFunction,
      EntityDefinition.GoBiologicalProcess,
      EntityDefinition.GoCellularComponent,
      EntityDefinition.GoBiologicalPhase,
      EntityDefinition.GoAnatomicalEntity,
      EntityDefinition.GoCellTypeEntity
    ]);
  }

  ngOnInit(): void {
    this.searchForm = this.createSearchForm(this.categories.selected);
    this.onValueChanges();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  resetTermNode() {
    this.termNode = EntityDefinition.generateBaseTerm([
      EntityDefinition.GoMolecularFunction,
      EntityDefinition.GoBiologicalProcess,
      EntityDefinition.GoCellularComponent,
      EntityDefinition.GoBiologicalPhase,
      EntityDefinition.GoAnatomicalEntity,
      EntityDefinition.GoCellTypeEntity
    ]);
  }


  createSearchForm(selectedCategory) {
    this.selectedCategoryName = selectedCategory.name;
    return new FormGroup({
      findWhat: new FormControl(),
      replaceWith: new FormControl(),
      category: new FormControl(selectedCategory),
    });
  }

  getClosure(rootTypes: Entity[]) {
    const s = [
      EntityDefinition.GoMolecularFunction,
      EntityDefinition.GoBiologicalProcess,
      EntityDefinition.GoCellularComponent,
      EntityDefinition.GoBiologicalPhase,
      EntityDefinition.GoAnatomicalEntity,
      EntityDefinition.GoCellTypeEntity
    ];

    const closures = s.filter(x => {
      return rootTypes.find(y => y.id === x.category);
    });

    return closures;
  }

  search() {
    const value = this.searchForm.value;
    const findWhat = value.findWhat;
    const filterType = 'terms';

    this.pantherReviewSearchService.searchCriteria[filterType] = [findWhat];
    this.pantherReviewSearchService.updateSearch();
  }

  replace() {
    const self = this;
    const value = this.searchForm.value;
    const replaceWith = value.replaceWith;

    this.pantherReviewSearchService.replace(replaceWith).subscribe((cams) => {
      if (cams) {
        self.pantherReviewSearchService.onReplaceChanged.next(true);
      }
    });
  }

  replaceAll() {
    const self = this;
    const value = this.searchForm.value;
    const replaceWith = value.replaceWith;
    const groupedEntities = groupBy(
      this.pantherReviewSearchService.matchedEntities,
      'modelId') as { string: Entity[] };
    const models = Object.keys(groupedEntities).length;
    const occurrences = this.pantherReviewSearchService.matchedCount;
    const success = (replace) => {
      if (replace) {
        this.pantherReviewSearchService.replaceAll(replaceWith).subscribe((cams) => {
          if (cams) {
            self.pantherReviewSearchService.onReplaceChanged.next(true);
          }
        });
      }
    };

    this.confirmDialogService.openConfirmDialog('Confirm ReplaceAll?',
      `Replace ${occurrences} occurrences across ${models} models`,
      success);
  }

  findNext() {
    this.pantherReviewSearchService.findNext();
  }

  findPrevious() {
    this.pantherReviewSearchService.findPrevious();
  }

  findSelected(value) {
    const closures = this.getClosure(value.rootTypes);

    if (closures) {
      this.termReplaceNode = EntityDefinition.generateBaseTerm(closures);
    }

    this.search();
  }

  termDisplayFn(term): string | undefined {
    return term && term.id ? `${term.label} (${term.id})` : undefined;
  }

  onValueChanges() {
    const self = this;
    const lookupFunc = self.pantherLookupService.lookupFunc()

    this.searchForm.get('category').valueChanges.pipe(
      distinctUntilChanged(),
    ).subscribe(data => {
      if (data) {
        self.selectedCategoryName = data.name;
        self.searchForm.patchValue({
          findWhat: null,
          replaceWith: null
        });

        self.calculateEnableReplace();
      }
    });

    this.searchForm.get('findWhat').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {
      if (data) {
        const lookup: EntityLookup = self.termNode.termLookup;
        lookupFunc.termLookup(data, lookup.requestParams).subscribe(response => {
          lookup.results = response;
        });

        self.calculateEnableReplace();
      }

    });

    this.searchForm.get('replaceWith').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(data => {
      if (data && self.termReplaceNode) {
        const lookup: EntityLookup = self.termReplaceNode.termLookup;
        lookupFunc.termLookup(data, lookup.requestParams).subscribe(response => {
          lookup.results = response;
        });

        self.calculateEnableReplace();
      }
    });
  }

  calculateEnableReplace() {
    const value = this.searchForm.value;
    const findWhat = value.findWhat;
    const replaceWith = value.replaceWith;

    this.displayReplaceForm.replaceSection = findWhat && findWhat.id;
    this.displayReplaceForm.replaceActions = replaceWith && replaceWith.id;
  }

  compareCategory(a: any, b: any) {
    if (a && b) {
      return (a.name === b.name);
    }
    return false;
  }

}
