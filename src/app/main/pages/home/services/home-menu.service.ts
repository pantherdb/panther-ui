import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


import { MatDrawer } from '@angular/material';

declare const require: any;
const each = require('lodash/forEach');
const cloneDeep = require('lodash/cLoneDeep');

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {

  _leftPanelMenu = {
    geneListAnalysis: {
      id: 'geneListAnalysis',
      label: 'Gene List Analysis'
    },
    broswse: {
      id: 'browse',
      label: 'Browse'
    },
    sequenceSearch: {
      id: 'sequenceSearch',
      label: 'Sequence Search'
    },
    cSNPScoring: {
      id: 'cSNPScoring',
      label: 'cSNP Scoring'
    }
  }

  selectedLeftPanel;

  private leftDrawer: MatDrawer;
  private rightDrawer: MatDrawer;

  constructor() {
    this.selectedLeftPanel = this._leftPanelMenu.geneListAnalysis;
  }

  get leftPanelMenu() {
    return this._leftPanelMenu;
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