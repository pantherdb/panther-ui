import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { cloneDeep } from 'lodash';

declare const require: any;
const pantherRules = require('@panther/data/config/panther-rules.json');
const pantherTypes = require('@panther/data/config/panther-types.json');

const organisms = require('@panther/data/organisms.json');

@Injectable({
  providedIn: 'root'
})
export class SnpScoringService {

  onGenesChanged: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient) {
    this.onGenesChanged = new BehaviorSubject([]);
  }

  get sectionRule() {
    return cloneDeep(pantherRules.sectionRule);
  }

  get organisms() {
    return organisms
  }

}
