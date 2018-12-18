import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PantherSharedModule } from '@panther/shared.module';
import { PantherSearchBarComponent } from './components/search-bar/search-bar.component';
import { PantherAdvancedSearchComponent } from './components/search-bar/advanced-search/advanced-search.component';

@NgModule({
    declarations: [
        PantherSearchBarComponent,
        PantherAdvancedSearchComponent
    ],
    imports: [
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
