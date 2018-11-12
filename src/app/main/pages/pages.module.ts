import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { AppsModule } from './../apps/apps.module';

import { HomeMenuService } from './home/services/home-menu.service';

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
  ],
  providers: [
    HomeMenuService
  ]
})

export class PagesModule {
}
