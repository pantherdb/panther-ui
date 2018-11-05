import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { pantherProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        pantherProgressBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports: [
        pantherProgressBarComponent
    ]
})
export class pantherProgressBarModule {
}
