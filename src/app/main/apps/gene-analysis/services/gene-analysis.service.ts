import { Injectable } from '@angular/core';

declare const require: any;
const each = require('lodash/forEach');
const pantherTypes = require('@panther/data/config/panther-types.json');
const organisms = require('@panther/data/organisms.json');

@Injectable({
  providedIn: 'root'
})
export class GeneAnalysisService {


  constructor() {
  }

  get pantherTypes() {
    return pantherTypes;
  }

  get organisms() {
    return organisms
  }
}
