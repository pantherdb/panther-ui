
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PantherConfigService } from '@panther/services/config.service';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'pthr-panther-home-sidebar',
  templateUrl: './panther-home-sidebar.component.html',
  styleUrls: ['./panther-home-sidebar.component.scss']
})
export class PantherHomeSidebarComponent implements OnInit, OnDestroy {
  pantherConfig: any;
  navigation: any;
  mainMenu;
  subMenu;
  private _unsubscribeAll: Subject<any>;

  constructor(private _pantherConfigService: PantherConfigService,
    public pantherMenuService: PantherMenuService) {
    this._unsubscribeAll = new Subject();

    this.mainMenu = this.pantherMenuService.mainMenu;
    this.subMenu = this.pantherMenuService.subMenu;
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
