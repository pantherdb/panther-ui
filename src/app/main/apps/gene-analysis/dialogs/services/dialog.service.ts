import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MatDialogRef } from '@angular/material';

import { GeneMapDialogComponent } from './../gene-map-dialog/gene-map.component';
import 'rxjs/add/operator/map';


@Injectable({
    providedIn: 'root'
})
export class GeneAnalysisDialogService {
    dialogRef: any;

    constructor(private httpClient: HttpClient,
        private _matDialog: MatDialog) {
    }

    openGeneMap(geneMap): void {
        this.dialogRef = this._matDialog.open(GeneMapDialogComponent, {
            panelClass: 'gene-map-dialog',
            data: {
                geneMap: geneMap
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }
}
