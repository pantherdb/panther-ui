import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

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

  onGenesChanged: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
    this.onGenesChanged = new BehaviorSubject([]);
  }


  generateFormRule(form) {
    let sectionRule = this.sectionRule;

    //sectionRule.list.display = true;
    // sectionRule.analysisOptions.display = true;
    sectionRule.listMap.disabled = false;
    sectionRule.list.display = true;
    sectionRule.analysisOptions.display = true;
    sectionRule.analysis.disabled = !form.organism
    sectionRule.analysisOptions.disabled = !form.analysis
    sectionRule.list.disabled = !form.analysis

    this.generateDisplayRule(sectionRule, form.analysis);

    return sectionRule;
  }

  generateDisplayRule(sectionRule, analysis) {
    switch (analysis) {
      case 'overrep':
        sectionRule.analysisCorrections.display = true;
        sectionRule.analysisTests.display = true;
        break;
      case 'list':
        sectionRule.dataColumns.display = true;
        break;
      case 'charts':
        sectionRule.chartTypes.display = true;
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

  getGeneMap(geneList): Observable<any> {
    return this.httpClient
      .get('api/gene-map-result');
  }

  getGeneList(searchCriteria): Observable<any> {
    return this.httpClient
      .get('api/gene-list-result');
  }
}
