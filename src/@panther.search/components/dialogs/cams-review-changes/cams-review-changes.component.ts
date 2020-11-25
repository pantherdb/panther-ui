
import { Component, OnDestroy, OnInit, ViewChild, Input, Inject } from '@angular/core';
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
  Entity
} from 'panther-form-base';

import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { PantherSearchService } from '@panther.search/services/panther-search.service';
import { pantherAnimations } from '@panther/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { PantherReviewSearchService } from '@panther.search/services/panther-review-search.service';
import { groupBy } from 'lodash';

@Component({
  selector: 'panther-cams-review-changes-dialog',
  templateUrl: './cams-review-changes.component.html',
  styleUrls: ['./cams-review-changes.component.scss'],
  animations: pantherAnimations,
})
export class CamsReviewChangesDialogComponent implements OnInit, OnDestroy {
  groupedEntities;
  occurrences = 0;
  models = 0;

  summary
  private _unsubscribeAll: Subject<any>;

  constructor
    (
      private _matDialogRef: MatDialogRef<CamsReviewChangesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      private camsService: CamsService,
      private pantherLookupService: PantherLookupService,
      private pantherDataService: PantherDataService,
      public pantherReviewSearchService: PantherReviewSearchService,
      public pantherSearchService: PantherSearchService,
      public pantherUserService: PantherUserService,
      public pantherFormConfigService: PantherFormConfigService,
      public pantherAnnotonFormService: PantherAnnotonFormService,
      public pantherFormMenuService: PantherFormMenuService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    const self = this;

    //this.summary = self.camsService.reviewChanges();
    console.log(this.summary);

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  generate(stats) {
    const self = this;
    const result = [
      {
        category: 'CAMs',
        count: stats.camsCount
      }, {
        category: 'Genes',
        count: stats.gpsCount
      }, {
        category: 'Terms',
        count: stats.termsCount
      }, {
        category: 'Evidence',
        count: stats.evidenceCount
      }, {
        category: 'Reference',
        count: stats.referencesCount
      }, {
        category: 'Relations',
        count: stats.relationsCount
      }
    ];

    return result;
  }

  save() {
    this._matDialogRef.close(true);
  }

  close() {
    this._matDialogRef.close();
  }
}


