import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';

const pantherTypes = require('@panther/data/config/panther-types.json');

import { MatDrawer } from '@angular/material';

declare const require: any;
const each = require('lodash/forEach');
const cloneDeep = require('lodash/cLoneDeep');

@Injectable({
  providedIn: 'root'
})
export class PantherMenuService {

  _mainMenu = [
    pantherTypes.page.home,
    pantherTypes.page.geneListAnalysis,
    pantherTypes.page.browser,
    pantherTypes.page.sequenceSearch,
    pantherTypes.page.cSNPScoring,
  ]

  _subMenu = [
    pantherTypes.page.version,
    pantherTypes.page.downloads,
    pantherTypes.page.help,
  ]

  selectedLeftPanel;

  private leftDrawer: MatDrawer;
  private rightDrawer: MatDrawer;

  constructor(private router: Router) {
    this.selectedLeftPanel = this._mainMenu[0];
  }


  openPage(menuItem) {
    this.router.navigate([menuItem.url])
  }

  get mainMenu() {
    return this._mainMenu;
  }

  get subMenu() {
    return this._subMenu;
  }

  get pantherTypes() {
    return pantherTypes;
  }

  selectLeftPanel(panel) {
    this.selectedLeftPanel = panel;
  }

  public setLeftDrawer(leftDrawer: MatDrawer) {
    this.leftDrawer = leftDrawer;
  }

  public openLeftDrawer(panel) {
    this.selectLeftPanel(panel);
    return this.leftDrawer.open();
  }

  public closeLeftDrawer() {
    return this.leftDrawer.close();
  }

  public toggleLeftDrawer(panel) {
    if (this.selectedLeftPanel.id === panel.id) {
      this.leftDrawer.toggle();
    } else {
      this.selectLeftPanel(panel)
      return this.openLeftDrawer(panel);
    }
  }

  public setRightDrawer(rightDrawer: MatDrawer) {
    this.rightDrawer = rightDrawer;
  }

  public openRightDrawer() {
    return this.rightDrawer.open();
  }

  public closeRightDrawer() {
    return this.rightDrawer.close();
  }

}