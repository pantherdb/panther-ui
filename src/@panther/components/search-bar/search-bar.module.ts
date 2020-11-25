import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PantherSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        PantherSearchBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports: [
        PantherSearchBarComponent
    ]
})
export class PantherSearchBarModule {
}
