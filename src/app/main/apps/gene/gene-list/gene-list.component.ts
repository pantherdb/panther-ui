import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GeneAnalysisService } from './../../gene-analysis/services/gene-analysis.service'
@Component({
  selector: 'pthr-gene-list',
  templateUrl: './gene-list.component.html',
  styleUrls: ['./gene-list.component.scss']
})
export class GeneListComponent implements OnInit {

  genes: any[] = [];
  columns: any[] = [];

  loadingIndicator: boolean;
  reorderable: boolean;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _httpClient: HttpClient,
    private geneAnalysisService: GeneAnalysisService
  ) {
    this.loadingIndicator = false;
    this.reorderable = true;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.columns = [
      //   { prop: 'name' },
      { prop: "Gene ID" },
      { prop: "Mapped IDs" },
      { prop: "Gene Name" },
      { prop: "Gene Symbol" },
      { prop: "Ortholog" },
      { prop: "PANTHER Family" },
      { prop: "PANTHER Protein Class" },
      { prop: "Species" }
    ];

    this.geneAnalysisService.onGenesChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(genes => {
        this.genes = genes;

        console.log(genes)
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
