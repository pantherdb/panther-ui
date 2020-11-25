import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantherSharedModule } from '@panther/shared.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { GenesTableComponent } from './genes/genes-table/genes-table.component';
import { PantherSearchComponent } from './panther-search.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PantherSearchBaseModule } from '@panther.search';
import { PantherFooterModule } from 'app/layout/components/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  declarations: [
    PantherSearchComponent,
    GenesTableComponent,
  ]
})

export class PantherSearchModule {
}
