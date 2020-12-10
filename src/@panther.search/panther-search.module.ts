import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PantherSharedModule } from '@panther/shared.module';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { BpTermComponent } from './components/browser/bp-term/bp-term.component';
import { BrowserComponent } from './components/browser/browser.component';
import { SpeciesTreeComponent } from './components/browser/species/species-tree/species-tree.component';
import { GeneMapDialogComponent } from './components/gene-analysis/dialogs/gene-map-dialog/gene-map.component';
import { GeneAnalysisComponent } from './components/gene-analysis/gene-analysis.component';
import { GeneFormComponent } from './components/gene-analysis/gene-form/gene-form.component';
import { GeneListComponent } from './components/gene/gene-list/gene-list.component';
import { OverrepListComponent } from './components/overrep/overrep-list/overrep-list.component';
import { SequenceSearchFormComponent } from './components/sequence-search/sequence-search-form/sequence-search-form.component';
import { SequenceSearchComponent } from './components/sequence-search/sequence-search.component';
import { SnpScoringFormComponent } from './components/snp-scoring/snp-scoring-form/snp-scoring-form.component';
import { SnpScoringComponent } from './components/snp-scoring/snp-scoring.component';
import { MatTreeModule } from '@angular/material/tree';
import { TermAutocompleteComponent } from './components/fields/term-autocomplete/term-autocomplete.component';

@NgModule({
    declarations: [
        SearchFilterComponent,
        SearchHistoryComponent,
        GeneAnalysisComponent,
        GeneFormComponent,
        GeneListComponent,
        OverrepListComponent,
        SpeciesTreeComponent,
        BrowserComponent,
        GeneMapDialogComponent,
        SnpScoringComponent,
        SequenceSearchComponent,
        SequenceSearchFormComponent,
        SnpScoringFormComponent,
        BpTermComponent,
        TermAutocompleteComponent
    ],
    imports: [
        MatTreeModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PantherSharedModule,
    ],
    exports: [
        SearchFilterComponent,
        SearchHistoryComponent,
        GeneAnalysisComponent,
        GeneFormComponent,
        GeneListComponent,
        OverrepListComponent,
        SpeciesTreeComponent,
        BrowserComponent,
        GeneMapDialogComponent,
        SnpScoringComponent,
        SequenceSearchComponent,
        SequenceSearchFormComponent,
        SnpScoringFormComponent,
        BpTermComponent,
        TermAutocompleteComponent
    ]
})
export class PantherSearchBaseModule {
}
