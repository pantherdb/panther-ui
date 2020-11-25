import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute } from '@angular/router';

import {
    Cam,
    Contributor,
    CamService,
    PantherUserService,
    PantherFormConfigService,
    PantherGraphService,
    PantherAnnotonFormService,
    AnnotonType,
    PantherFormMenuService,
    LeftPanel,
} from 'panther-form-base';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { PantherCommonMenuService } from '@panther.common/services/panther-common-menu.service';

@Component({
    selector: 'panther-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class PantherToolbarComponent implements OnInit, OnDestroy {
    AnnotonType = AnnotonType;

    public cam: Cam;
    userStatusOptions: any[];
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;
    navigation: any;
    pantherFormUrl = '';
    loginUrl = '';
    logoutUrl = '';
    pantherUrl = '';

    private _unsubscribeAll: Subject<any>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private camService: CamService,
        private pantherCommonMenuService: PantherCommonMenuService,
        public pantherUserService: PantherUserService,
        public pantherConfigService: PantherFormConfigService,
        public pantherAnnotonFormService: PantherAnnotonFormService,
        public pantherFormMenuService: PantherFormMenuService,
    ) {
        const self = this;
        this._unsubscribeAll = new Subject();

        this.router.events.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (event) => {
                    if (event instanceof NavigationStart) {
                        this.showLoadingBar = true;
                    }
                    if (event instanceof NavigationEnd) {
                        this.showLoadingBar = false;
                    }
                });
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


    openApps() {
        this.pantherCommonMenuService.openLeftSidenav();
    }

    openCamForm() {
        this.camService.initializeForm(this.cam);
        this.pantherFormMenuService.openLeftDrawer(LeftPanel.camForm);
    }

    openAnnotonForm(annotonType: AnnotonType) {
        this.pantherAnnotonFormService.setAnnotonType(annotonType);
        this.pantherFormMenuService.openLeftDrawer(LeftPanel.annotonForm);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


}
