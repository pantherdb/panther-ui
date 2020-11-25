import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PantherConfigService } from '@panther/services/config.service';
import { PantherSidebarService } from '@panther/components/sidebar/sidebar.service';
import { PantherSplashScreenService } from '@panther/services/splash-screen.service';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    pantherConfig: any;
    navigation: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        @Inject(DOCUMENT) private document: any,
        private pantherSplashScreenService: PantherSplashScreenService,
        private _pantherConfigService: PantherConfigService,
        private _pantherSidebarService: PantherSidebarService,
        private _platform: Platform
    ) {

        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }


        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void {
        this._pantherConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.pantherConfig = config;

                // Color theme - Use normal for loop for IE11 compatibility
                for (let i = 0; i < this.document.body.classList.length; i++) {
                    const className = this.document.body.classList[i];

                    if (className.startsWith('theme-')) {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.pantherConfig.colorTheme);
            });
    }


    ngOnDestroy(): void {

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void {
        this._pantherSidebarService.getSidebar(key).toggleOpen();
    }
}
