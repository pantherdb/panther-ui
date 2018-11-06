import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { PantherConfirmDialogComponent } from './confirm-dialog.component';

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
