import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
