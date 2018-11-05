import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { pantherConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        pantherConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        pantherConfirmDialogComponent
    ],
})

export class pantherConfirmDialogModule {
}
