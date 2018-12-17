
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PantherConfigService } from '@panther/services/config.service';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  //  encapsulation: ViewEncapsulation.None
}

) export class NavbarComponent implements OnInit, OnDestroy {
  pantherConfig: any;
  navigation: any;
  leftPanelMenu;
  private _unsubscribeAll: Subject<any>;

  constructor(private _pantherConfigService: PantherConfigService,
    public pantherMenuService: PantherMenuService) {
    this._unsubscribeAll = new Subject();

    this.leftPanelMenu = this.pantherMenuService.leftPanelMenu;
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