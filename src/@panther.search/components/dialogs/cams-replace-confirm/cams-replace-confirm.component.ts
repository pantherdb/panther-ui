
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
  selector: 'panther-cams-replace-confirm-dialog',
  templateUrl: './cams-replace-confirm.component.html',
  styleUrls: ['./cams-replace-confirm.component.scss'],
  animations: pantherAnimations,
})
export class CamsReplaceConfirmDialogComponent implements OnInit, OnDestroy {
  groupedEntities;
  occurrences = 0;
  models = 0;


  private _unsubscribeAll: Subject<any>;

  constructor
    (
      private _matDialogRef: MatDialogRef<CamsReplaceConfirmDialogComponent>,
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

    this.groupedEntities = groupBy(
      this.pantherReviewSearchService.matchedEntities, 'modelId') as { string: Entity[] };

    this.models = Object.keys(this.groupedEntities).length;
    this.occurrences = this.pantherReviewSearchService.matchedCount;
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  save() {
    this._matDialogRef.close(true);
  }

  close() {
    this._matDialogRef.close();
  }
}


