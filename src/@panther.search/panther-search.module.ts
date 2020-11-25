import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PantherSharedModule } from '@panther/shared.module';
import { PantherSearchBarComponent } from './components/search-bar/search-bar.component';
import { PantherAdvancedSearchComponent } from './components/search-bar/advanced-search/advanced-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        PantherSearchBarComponent,
        PantherAdvancedSearchComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PantherSharedModule
    ],
    exports: [
        PantherSearchBarComponent
    ],
    entryComponents: [
        PantherAdvancedSearchComponent
    ]
})
export class PantherSearchBarModule {
}
