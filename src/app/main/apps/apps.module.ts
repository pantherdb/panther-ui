import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { pantherSharedModule } from '@panther/shared.module';

const routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    pantherSharedModule,
  ],
  providers: [

  ]

})

export class AppsModule {
}
