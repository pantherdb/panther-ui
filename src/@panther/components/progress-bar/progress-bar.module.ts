import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { PantherProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        PantherProgressBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports: [
        PantherProgressBarComponent
    ]
})
export class PantherProgressBarModule {
}
