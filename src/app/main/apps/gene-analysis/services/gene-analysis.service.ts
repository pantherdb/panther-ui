import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare const require: any;
const each = require('lodash/forEach');
const cloneDeep = require('lodash/cLoneDeep');
const pantherRules = require('@panther/data/config/panther-rules.json');
const pantherTypes = require('@panther/data/config/panther-types.json');

const organisms = require('@panther/data/organisms.json');

@Injectable({
  providedIn: 'root'
})
export class GeneAnalysisService {
  constructor() {

  }

  generateDisplayRule(analysis) {
    let sectionRule = this.sectionRule;

    sectionRule.list.display = true;
    sectionRule.analysisOptions.display = true;
    switch (analysis) {
      case 'overrep':
        sectionRule.analysisCorrections.display = true;
        sectionRule.analysisTests.display = true;
        break;
      case 'list':
        sectionRule.dataColumns.display = true;
        break;
      case 'charts':
        sectionRule.chatTypes.display = true;
        break;
      case 'enrichment':
        sectionRule.analysisCorrections.display = true;
        break;
    }

    return sectionRule;
  }

  get pantherTypes() {
    return pantherTypes;
  }

  get sectionRule() {
    return cloneDeep(pantherRules.sectionRule);
  }

  get organisms() {
    return organisms
  }
}
