import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { GeneAnalysisComponent } from './gene-analysis/gene-analysis.component';
import { GeneFormComponent } from './gene-analysis/gene-form/gene-form.component';
import { GeneAnalysisService } from './gene-analysis/services/gene-analysis.service';
import { GeneListComponent } from './gene/gene-list/gene-list.component'

const routes = [];

@NgModule({
  declarations: [
    GeneAnalysisComponent,
    GeneFormComponent,
    GeneListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
  ],
  exports: [
    GeneAnalysisComponent,
    GeneListComponent
  ],
  providers: [
    GeneAnalysisService
  ]

})

export class AppsModule {
}
