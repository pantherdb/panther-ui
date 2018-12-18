import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'environments/environment'

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

const pantherTypes = require('@panther/data/config/panther-types.json');

import { MatDrawer } from '@angular/material';

declare const require: any;
const each = require('lodash/forEach');
const cloneDeep = require('lodash/cLoneDeep');

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  _mainMenu = [
    pantherTypes.page.version.children.genes,
    pantherTypes.page.version.children.hmms,
    pantherTypes.page.version.children.pathway,
    pantherTypes.page.version.children.ontologies
  ]

  selectedLeftPanel;


  constructor(private router: Router, private httpClient: HttpClient) {
    this.selectedLeftPanel = this._mainMenu[0];
  }


  openPage(menuItem) {
    //  this.router.navigate([menuItem.url])
    this.selectedLeftPanel = menuItem;
  }

  get mainMenu() {
    return this._mainMenu;
  }

  getVersionStatistics(): Observable<any> {
    return this.httpClient
      .get('api/version-statistics');
  }
}