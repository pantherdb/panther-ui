import { NgModule } from '@angular/core';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherSearchModule } from './panther-search/panther-search.module';

@NgModule({
  declarations: [],
  imports: [
    PantherSharedModule,
    PantherSearchModule
  ],
  exports: [
    PantherSearchModule
  ],
  providers: [

  ]

})

export class AppsModule {
}
