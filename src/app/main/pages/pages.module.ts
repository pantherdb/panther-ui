import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { AppsModule } from './../apps/apps.module';


import { HomeComponent } from './home/home.component';
import { PantherDetailComponent } from './home/panther-detail/panther-detail.component';
import { PantherHomeSidebarComponent } from './home/panther-home-sidebar/panther-home-sidebar.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { VersionComponent } from './version/version.component';
import { VersionSidebarComponent } from './version/version-sidebar/version-sidebar.component';
import { VersionDetailComponent } from './version/version-detail/version-detail.component';

const routes = [{
  path: '', component: HomeComponent
}, {
  path: 'data-version', component: VersionComponent
}, {
  path: 'downloads', component: DownloadsComponent
}, {
  path: 'help', component: HelpComponent
}, {
  path: 'about', component: AboutComponent
}];

@NgModule({
  declarations: [
    HomeComponent,
    PantherDetailComponent,
    PantherHomeSidebarComponent,
    DownloadsComponent,
    HelpComponent,
    AboutComponent,
    VersionComponent,
    VersionSidebarComponent,
    VersionDetailComponent
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
