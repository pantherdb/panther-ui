import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherFormModule } from './panther-form/panther-form.module';
import { PantherSearchModule } from './panther-search/panther-search.module';


@NgModule({
  declarations: [],
  imports: [
    PantherSharedModule,
    PantherFormModule,
    PantherSearchModule
  ],
  exports: [
    PantherFormModule,
    PantherFormModule,
    PantherSearchModule
  ],
  providers: [

  ]

})

export class AppsModule {
}
