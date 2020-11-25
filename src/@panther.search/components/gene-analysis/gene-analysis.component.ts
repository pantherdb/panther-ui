
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

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

  private _unsubscribeAll: Subject<any>;

  constructor(
    public pantherSearchMenuService: PantherSearchMenuService) {

    this.leftPanelMenu = this.pantherSearchMenuService.mainMenu;
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.pantherSearchMenuService.setLeftDrawer(this.leftDrawer);
    this.pantherSearchMenuService.setRightDrawer(this.rightDrawer);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
