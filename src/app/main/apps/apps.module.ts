import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PantherSharedModule } from '@panther/shared.module';
import { GeneAnalysisComponent } from './gene-analysis/gene-analysis.component';
import { GeneFormComponent } from './gene-analysis/gene-form/gene-form.component';
import { GeneAnalysisService } from './gene-analysis/services/gene-analysis.service';
import { GeneListComponent } from './gene/gene-list/gene-list.component'
import { OverrepListComponent } from './overrep/overrep-list/overrep-list.component'
import { SpeciesTreeComponent } from './browser/species/species-tree/species-tree.component';
import { BrowserComponent } from './browser/browser.component';

import { GeneMapDialogComponent } from './gene-analysis/dialogs/gene-map-dialog/gene-map.component';
import { GeneAnalysisDialogService } from './gene-analysis/dialogs/services/dialog.service';
import { SnpScoringService } from './snp-scoring/services/snp-scoring.service';
import { SnpScoringComponent } from './snp-scoring/snp-scoring.component';
import { SequenceSearchComponent } from './sequence-search/sequence-search.component';
import { BrowserSidebarComponent } from './browser/browser-sidebar/browser-sidebar.component';
import { SequenceSearchFormComponent } from './sequence-search/sequence-search-form/sequence-search-form.component';
import { SnpScoringFormComponent } from './snp-scoring/snp-scoring-form/snp-scoring-form.component';

const routes = [{
  path: 'gene-analysis', component: GeneAnalysisComponent
}, {
  path: 'browser', component: BrowserComponent
}, {
  path: 'csnp-scoring', component: SnpScoringComponent
}, {
  path: 'sequence-search', component: SequenceSearchComponent
}];

@NgModule({
  declarations: [
    GeneAnalysisComponent,
    GeneFormComponent,
    GeneListComponent,
    OverrepListComponent,
    SpeciesTreeComponent,
    BrowserComponent,
    //Dialogs
    GeneMapDialogComponent,
    SnpScoringComponent,
    SequenceSearchComponent,
    BrowserSidebarComponent,
    SequenceSearchFormComponent,
    SnpScoringFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    PantherSharedModule,
  ],
  exports: [
    GeneAnalysisComponent,
    GeneListComponent,
    OverrepListComponent,
    BrowserComponent,
    SequenceSearchComponent,
    SnpScoringComponent
  ],
  providers: [
    GeneAnalysisService,
    GeneAnalysisDialogService,
    SnpScoringService

  ],
  entryComponents: [GeneMapDialogComponent]

})

export class AppsModule {
}
