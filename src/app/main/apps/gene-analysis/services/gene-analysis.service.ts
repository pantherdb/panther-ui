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

  getGeneList(searchCriteria): Observable<any> {
    return this.httpClient
      .get('api/gene-list-result');
  }
}
