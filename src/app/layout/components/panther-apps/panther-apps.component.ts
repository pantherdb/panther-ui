import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cam, CamService, PantherUserService, PantherFormConfigService } from 'panther-form-base';
import { MatSidenav } from '@angular/material/sidenav';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';

@Component({
    selector: 'panther-panther-apps',
    templateUrl: './panther-apps.component.html',
    styleUrls: ['./panther-apps.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PantherAppsComponent implements OnInit, OnDestroy {
    @Input('sidenav')
    sidenav: MatSidenav;

    public cam: Cam;
    date: Date;

    private _unsubscribeAll: Subject<any>;

    constructor(
        public pantherConfigService: PantherFormConfigService,
        private pantherCommonMenuService: PantherCommonMenuService,
        private camService: CamService,
        public pantherUserService: PantherUserService,
    ) {
        this.date = new Date();
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.camService.onCamChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((cam) => {
                if (!cam) {
                    return;
                }

                this.cam = cam;
            });
    }

    createModel(type: 'graph-editor' | 'panther-form') {
        this.pantherCommonMenuService.createModel(type);
    }

    close() {
        this.sidenav.close();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
