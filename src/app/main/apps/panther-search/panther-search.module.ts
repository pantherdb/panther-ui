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
import { CategoriesTableComponent } from './categories/categories-table/categories-table.component';
import { FamiliesTableComponent } from './families/families-table/families-table.component';
import { PathwaysTableComponent } from './pathways/pathways-table/pathways-table.component';

const routes = [
  {
    path: '',
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
    FamiliesTableComponent,
    PathwaysTableComponent,
    CategoriesTableComponent
  ]
})

export class PantherSearchModule {
}
