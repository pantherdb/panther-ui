import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatDrawer } from '@angular/material';


import { PantherMenuService } from '@panther.common/services/panther-menu.service';

import { GeneAnalysisService } from './../../gene-analysis/services/gene-analysis.service'
@Component({
  selector: 'pthr-overrep-list',
  templateUrl: './overrep-list.component.html',
  styleUrls: ['./overrep-list.component.scss']
})
export class OverrepListComponent implements OnInit {

  @ViewChild('leftSubDrawer')
  leftDrawer: MatDrawer;

  rows: any[] = [];
  overrepList: any;
  columns: any[] = [];

  loadingIndicator: boolean;
  reorderable: boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _httpClient: HttpClient,
    public pantherMenuService: PantherMenuService,
    private geneAnalysisService: GeneAnalysisService
  ) {
    this.loadingIndicator = false;
    this.reorderable = true;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.columns = [
      //   { prop: 'name' },
      { prop: 'term.label' },
      { prop: 'expected' },
      { prop: 'fdr' }
    ];

    this.geneAnalysisService.onOverrepChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(overrepList => {
        if (overrepList.results) {
          this.overrepList = overrepList;
          this.rows = this.overrepList.results.result;
        }
      });
  }

  openLeftDrawer() {
    return this.leftDrawer.open();
  }

  closeLeftDrawer() {
    return this.leftDrawer.close();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
