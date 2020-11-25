import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PantherConfigService } from '@panther/services/config.service';
import { MatSidenav } from '@angular/material/sidenav';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';

@Component({
    selector: 'layout-panther',
    templateUrl: './layout-panther.component.html',
    styleUrls: ['./layout-panther.component.scss'],
    encapsulation: ViewEncapsulation.None
}

) export class LayoutPantherComponent implements OnInit, OnDestroy {
    pantherConfig: any;
    navigation: any;
    @ViewChild('leftSidenav', { static: true })
    leftSidenav: MatSidenav;
    private _unsubscribeAll: Subject<any>;

    constructor(private _pantherConfigService: PantherConfigService,
        public pantherCommonMenuService: PantherCommonMenuService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._pantherConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.pantherConfig = config;
            });
        this.pantherCommonMenuService.setLeftSidenav(this.leftSidenav);
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}