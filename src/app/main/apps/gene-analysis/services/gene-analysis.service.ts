import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneAnalysisService {

  private _analysisTypes = [
    {
      id: 1,
      label: 'Functional classification viewed in gene list',
    }, {
      id: 2,
      label: 'Functional classification viewed in graphic charts',
    }, {
      id: 3,
      label: 'Statistical overrepresentation test',
    }, {
      id: 4,
      label: 'Statistical enrichment test'
    }
  ]

  constructor() { }

  get analysisTypes() {
    return this._analysisTypes;
  }
}
