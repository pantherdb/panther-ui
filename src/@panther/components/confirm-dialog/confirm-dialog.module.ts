import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PantherConfirmDialogComponent } from '@panther/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        PantherConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        PantherConfirmDialogComponent
    ],
})
export class PantherConfirmDialogModule {
}
