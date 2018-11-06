import { Injectable } from '@angular/core';

declare const require: any;
const each = require('lodash/forEach');
const organisms = require('./../data/organisms.json');

@Injectable({
  providedIn: 'root'
})
export class GeneAnalysisService {

  private _analysisTypes = [{
    id: 'overrep',
    label: 'Statistical overrepresentation test',
  }, {
    id: 'list',
    label: 'Functional classification viewed in gene list',
  }, {
    id: 'charts',
    label: 'Functional classification viewed in graphic charts',
  }, {
    id: 'enrichment',
    label: 'Statistical enrichment test'
  }]

  private _dataColumns = [
    {
      value: "GENE_GENE_ID", label: 'Gene ID'
    }, {
      value: "GENE_GENE_NAME", label: 'Gene Name, Gene Symbol, Ortholog'
    }, {
      value: "GENE_BEST_FAM_SUBFAM_HIT", label: 'PANTHER Family / Subfamily'
    }, {
      value: "GENE_PC_PROC", label: 'PANTHER Protein Class'
    }, {
      value: "GENE_SPECIES", label: 'Species'
    }, {
      value: "GENE_MOL_FUN", label: 'PANTHER GO - Slim Molecular Function'
    }, {
      value: "GENE_BIO_PROC", label: 'PANTHER GO - Slim Biological Process'
    }, {
      value: "GENE_CC_PROC", label: 'PANTHER GO - Slim Cellular Component'
    }, {
      value: "PATHWAY", label: 'Pathway'
    }, {
      value: "GENE_PUBLIC_START_POS", label: 'Public Start Pos'
    }, {
      value: "GENE_PUBLIC_END_POS", label: 'Public End Pos'
    }, {
      value: "GENE_PUBLIC_LOCATION", label: 'Public Location'
    }, {
      value: "GENE_GO_MF_COMP_PROC", label: 'GO database MF Complete'
    }, {
      value: "GENE_GO_BP_COMP_PROC", label: 'GO database BP Complete'
    }, {
      value: "GENE_GO_CC_COMP_PROC", label: 'GO database CC Complete'
    }, { value: "GENE_PATHWAY_REACTOME", label: 'Reactome Pathway' }
  ]

  constructor() {

    console.log(organisms)
  }

  get analysisTypes() {
    return this._analysisTypes;
  }

  get dataColumns() {
    return this._dataColumns;
  }

  get organisms() {
    return organisms
  }
}
