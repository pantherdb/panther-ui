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
import { BpTermComponent } from './browser/bp-term/bp-term.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTreeModule } from '@angular/material/tree';

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
    SnpScoringFormComponent,
    BpTermComponent
  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTreeModule,
    // NgxDatatableModule,
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
