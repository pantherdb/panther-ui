import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PantherSharedModule } from '@panther/shared.module';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';

@NgModule({
    declarations: [
        SearchFilterComponent,
        SearchHistoryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PantherSharedModule,
    ],
    exports: [
        SearchFilterComponent,
        SearchHistoryComponent,
    ]
})
export class PantherSearchBaseModule {
}
