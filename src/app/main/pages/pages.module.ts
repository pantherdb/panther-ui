import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { AppsModule } from './../apps/apps.module';

import { HomeComponent } from './home/home.component';

const routes = [{
  path: '', component: HomeComponent
}];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
    AppsModule
  ]
})

export class PagesModule {
}
