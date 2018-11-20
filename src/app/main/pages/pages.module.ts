import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { AppsModule } from './../apps/apps.module';


import { HomeComponent } from './home/home.component';
import { PantherDetailComponent } from './home/panther-detail/panther-detail.component';

const routes = [{
  path: '', component: HomeComponent
}];

@NgModule({
  declarations: [
    HomeComponent,
    PantherDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
    AppsModule
  ],
  providers: [
  ]
})

export class PagesModule {
}
