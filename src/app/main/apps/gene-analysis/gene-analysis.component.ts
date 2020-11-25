
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'panther-gene-analysis',
  templateUrl: './gene-analysis.component.html',
  styleUrls: ['./gene-analysis.component.scss']
})
export class GeneAnalysisComponent implements OnInit, OnDestroy {

  @ViewChild('leftDrawer')
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer')
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService) {

    this.leftPanelMenu = this.pantherSearchMenuService.mainMenu;
  }

  ngOnInit() {
    this.pantherSearchMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherSearchMenuService.setRightDrawer(this.rightDrawer);
  }
}
