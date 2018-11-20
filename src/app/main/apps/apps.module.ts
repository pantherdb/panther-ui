import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { GeneAnalysisComponent } from './gene-analysis/gene-analysis.component';
import { GeneFormComponent } from './gene-analysis/gene-form/gene-form.component';
import { GeneAnalysisService } from './gene-analysis/services/gene-analysis.service';
import { GeneListComponent } from './gene/gene-list/gene-list.component'
import { SpeciesTreeComponent } from './browser/species/species-tree/species-tree.component';
import { BrowserComponent } from './browser/browser.component';

import { GeneMapDialogComponent } from './gene-analysis/dialogs/gene-map-dialog/gene-map.component';
import { GeneAnalysisDialogService } from './gene-analysis/dialogs/services/dialog.service';

const routes = [];

@NgModule({
  declarations: [
    GeneAnalysisComponent,
    GeneFormComponent,
    GeneListComponent,
    SpeciesTreeComponent,
    BrowserComponent,
    //Dialogs
    GeneMapDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
  ],
  exports: [
    GeneAnalysisComponent,
    GeneListComponent,
    BrowserComponent
  ],
  providers: [
    GeneAnalysisService,
    GeneAnalysisDialogService
  ],
  entryComponents: [GeneMapDialogComponent]

})

export class AppsModule {
}
