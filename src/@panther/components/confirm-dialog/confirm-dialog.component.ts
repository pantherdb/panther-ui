import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'panther-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class PantherConfirmDialogComponent {
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<PantherConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<PantherConfirmDialogComponent>
    ) {
    }

}
