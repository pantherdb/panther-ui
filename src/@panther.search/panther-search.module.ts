import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PantherSharedModule } from '@panther/shared.module';
import { SearchOrganismsComponent } from './components/search-organisms/search-organisms.component';
import { SearchGroupsComponent } from './components/search-groups/search-groups.component';
import { SearchContributorsComponent } from './components/search-contributors/search-contributors.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchRelationComponent } from './components/search-relation/search-relation.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { PantherEditorModule } from '@panther.editor';
import { ArtBasketComponent } from './components/art-basket/art-basket.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { CamsReplaceConfirmDialogComponent } from './components/dialogs/cams-replace-confirm/cams-replace-confirm.component';
import { CamsReviewChangesDialogComponent } from './components/dialogs/cams-review-changes/cams-review-changes.component';

@NgModule({
    declarations: [
        SearchFilterComponent,
        SearchFormComponent,
        SearchContributorsComponent,
        SearchGroupsComponent,
        SearchOrganismsComponent,
        SearchRelationComponent,
        SearchHistoryComponent,
        ArtBasketComponent,
        ReviewFormComponent,
        CamsReplaceConfirmDialogComponent,
        CamsReviewChangesDialogComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PantherSharedModule,
        PantherEditorModule
    ],
    exports: [
        SearchFilterComponent,
        SearchFormComponent,
        SearchContributorsComponent,
        SearchGroupsComponent,
        SearchOrganismsComponent,
        SearchRelationComponent,
        SearchHistoryComponent,
        ArtBasketComponent,
        ReviewFormComponent,
        CamsReplaceConfirmDialogComponent,
        CamsReviewChangesDialogComponent,
    ]
})
export class PantherSearchBaseModule {
}
