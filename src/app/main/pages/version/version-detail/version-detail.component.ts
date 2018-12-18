
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatDrawer } from '@angular/material';


import { PantherMenuService } from '@panther.common/services/panther-menu.service';

import { VersionService } from './../services/version.service'
@Component({
  selector: 'pthr-version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.scss']
})
export class VersionDetailComponent implements OnInit {

  @ViewChild('leftSubDrawer')
  leftDrawer: MatDrawer;

  rows: any[] = [];
  columns: any[] = [];

  loadingIndicator: boolean;
  reorderable: boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _httpClient: HttpClient,
    public pantherMenuService: PantherMenuService,
    private versionService: VersionService
  ) {
    this.loadingIndicator = false;
    this.reorderable = true;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.columns = [
      //   { prop: 'name' },
      { prop: "Organism" },
      { prop: "Common Name" },
      { prop: "Short Name" },
      { prop: "Genome Source" },
      { prop: "Date" },
      { prop: "Total # of Genes" },
      { prop: "# of Genes in Families" },
      { prop: "# of genes with Molecular Function" },
      { prop: "# of Molecular Function terms" },
      { prop: "# of Molecular Function annotations" },
      { prop: "# of genes with Biological Process" },
      { prop: "# of Biological Process terms" },
      { prop: "# of Biological Process annotations" },
      { prop: "# of genes with Cellular component" },
      { prop: "# of Cellular component terms" },
      { prop: "# of Cellular Component annotations" },
      { prop: "# of genes with Protein Class" },
      { prop: "# of Protein Class terms" },
      { prop: "# of Protein Class annotations" },
      { prop: "# of genes with Pathway components" },
      { prop: "# of Pathway terms" },
      { prop: "# of Pathway annotations" }
    ];

    this.versionService.getVersionStatistics()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.rows = response
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
