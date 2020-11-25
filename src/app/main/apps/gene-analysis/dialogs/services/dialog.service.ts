import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneMapDialogComponent } from './../gene-map-dialog/gene-map.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
    providedIn: 'root'
})
export class GeneAnalysisDialogService {
    dialogRef: any;

    constructor(
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
            .subscribe(() => {

            });
    }
}
