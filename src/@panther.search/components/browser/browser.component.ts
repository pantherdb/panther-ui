
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PantherConfigService } from '@panther/services/config.service';

import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';


import { SelectionModel } from '@angular/cdk/collections';
import { TermFlatNode } from './models/term';


@Component({
  selector: 'panther-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})

export class BrowserComponent implements OnInit, OnDestroy {
  pantherConfig: any;
  navigation: any;
  mainMenu;
  subMenu;

  bpChecklistSelection = new SelectionModel<TermFlatNode>(true);
  private _unsubscribeAll: Subject<any>;

  constructor(private _pantherConfigService: PantherConfigService,
    public pantherSearchMenuService: PantherSearchMenuService) {
    this._unsubscribeAll = new Subject();

    this.mainMenu = this.pantherSearchMenuService.mainMenu;
    this.subMenu = this.pantherSearchMenuService.subMenu;
  }

  ngOnInit(): void {
    this._pantherConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.pantherConfig = config;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
