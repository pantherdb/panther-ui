
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PantherMenuService } from '@panther.common/services/panther-menu.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'panther-gene-analysis',
  templateUrl: './gene-analysis.component.html',
  styleUrls: ['./gene-analysis.component.scss']
})
export class GeneAnalysisComponent implements OnInit {

  @ViewChild('leftDrawer')
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer')
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(
    public pantherMenuService: PantherMenuService) {

    this.leftPanelMenu = this.pantherMenuService.mainMenu;
  }

  ngOnInit() {
    this.pantherMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherMenuService.setRightDrawer(this.rightDrawer);
  }
}
