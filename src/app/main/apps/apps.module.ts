import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { GeneAnalysisComponent } from './gene-analysis/gene-analysis.component';
import { GeneFormComponent } from './gene-analysis/gene-form/gene-form.component';
import { GeneAnalysisService } from './gene-analysis/services/gene-analysis.service'

const routes = [];

@NgModule({
  declarations: [
    GeneAnalysisComponent,
    GeneFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
  ],
  exports: [
    GeneAnalysisComponent
  ],
  providers: [
    GeneAnalysisService
  ]

})

export class AppsModule {
}
