import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

export type AlertType = 'error' | 'success' | 'warning' | 'info';

@Injectable({
    providedIn: 'root'
})
export class PantherDialogService {

    dialogRef: any;

    constructor(
        private snackBar: MatSnackBar,
        private _matDialog: MatDialog) {
    }

    openAlert(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 10000,
            verticalPosition: 'top'
        });
    }

    alert(alertType: AlertType, message: string, action?: string) {
        this.snackBar.open(message, action, {
            duration: 10000,
            verticalPosition: 'top',
            panelClass: ['panther-alert', 'alert-' + alertType]
        });
    }


}
