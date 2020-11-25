import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantherSharedModule } from '@panther/shared.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { CamsTableComponent } from './cams/cams-table/cams-table.component';
import { PantherSearchComponent } from './panther-search.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PantherSearchBaseModule } from '@panther.search';
import { PantherFooterModule } from 'app/layout/components/footer/footer.module';
import { PantherFormModule } from '../panther-form';
import { CamsReviewComponent } from './cams/cams-review/cams-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamDetailComponent } from './cams/cam-detail/cam-detail.component';
import { CamsReviewChangesComponent } from './cams/cams-review-changes/cams-review-changes.component';

const routes = [
  {
    path: 's',
    component: PantherSearchComponent
  }
];

@NgModule({
  imports: [
    PantherSharedModule,
    ScrollingModule,
    CommonModule,
    RouterModule.forChild(routes),
    ContextMenuModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PantherSearchBaseModule,
    PantherFooterModule,
    PantherFormModule,
  ],
  declarations: [
    PantherSearchComponent,
    CamsTableComponent,
    CamsReviewComponent,
    CamDetailComponent,
    CamsReviewChangesComponent
  ]
})

export class PantherSearchModule {
}
