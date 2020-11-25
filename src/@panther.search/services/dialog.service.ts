import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PantherConfirmDialogComponent } from '@panther/components/confirm-dialog/confirm-dialog.component';
import { CamsReplaceConfirmDialogComponent } from './../components/dialogs/cams-replace-confirm/cams-replace-confirm.component';
import { CamsReviewChangesDialogComponent } from './../components/dialogs/cams-review-changes/cams-review-changes.component';

@Injectable({
    providedIn: 'root'
})
export class PantherSearchDialogService {

    dialogRef: any;

    constructor(
        private snackBar: MatSnackBar,
        private _matDialog: MatDialog) {
    }

    openSuccessfulSaveToast(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 10000,
            verticalPosition: 'top'
        });
    }

    openConfirmDialog(searchCriteria, success): void {
        this.dialogRef = this._matDialog.open(PantherConfirmDialogComponent, {
            panelClass: 'panther-search-database-dialog',
            data: {
                searchCriteria: searchCriteria
            },
            width: '600px',
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (response) {
                    success(response);
                }
            });
    }


    openCamReplaceConfirmDialog(success): void {
        this.dialogRef = this._matDialog.open(CamsReplaceConfirmDialogComponent, {
            panelClass: 'panther-cams-replace-confirm-dialog',
            data: {
                // searchCriteria: searchCriteria
            },
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (response) {
                    success(response);
                }
            });
    }

    openCamReviewChangesDialog(success): void {
        this.dialogRef = this._matDialog.open(CamsReviewChangesDialogComponent, {
            panelClass: 'panther-cams-review-changes-dialog',
            data: {
                // searchCriteria: searchCriteria
            },
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (response) {
                    success(response);
                }
            });
    }
}
