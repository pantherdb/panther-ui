import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'panther-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class pantherConfirmDialogComponent {
    public confirmMessage: string;

    constructor(public dialogRef: MatDialogRef<pantherConfirmDialogComponent>) {
    }
}
