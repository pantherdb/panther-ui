import { Component, OnInit, OnDestroy, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatMenuTrigger } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'gene-map-dialog',
  templateUrl: './gene-map.component.html',
  styleUrls: ['./gene-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GeneMapDialogComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;

  @ViewChild(MatSort)
  sort: MatSort;

  geneMap: []
  displayedColumns: string[] = ['gene_id', 'mapped_id', 'unmapped_id', 'comment'];
  dataSource;

  constructor(
    private _matDialogRef: MatDialogRef<GeneMapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _matDialog: MatDialog,
    private route: ActivatedRoute, ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.geneMap = this._data.geneMap
    this.dataSource = new MatTableDataSource(this.geneMap);
    this.dataSource.sort = this.sort;

    console.log(this, this.geneMap)
  }

  close() {
    this._matDialogRef.close();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
