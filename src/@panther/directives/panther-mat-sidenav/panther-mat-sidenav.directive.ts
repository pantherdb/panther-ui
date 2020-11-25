import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PantherMatchMediaService } from '@panther/services/match-media.service';
import { PantherMatSidenavHelperService } from '@panther/directives/panther-mat-sidenav/panther-mat-sidenav.service';

@Directive({
    selector: '[pantherMatSidenavHelper]'
})
export class PantherMatSidenavHelperDirective implements OnInit, OnDestroy {
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    pantherMatSidenavHelper: string;

    @Input()
    matIsLockedOpen: string;


    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PantherMatchMediaService} _pantherMatchMediaService
     * @param {PantherMatSidenavHelperService} _pantherMatSidenavHelperService
     * @param {MatSidenav} _matSidenav
     * @param {MediaObserver} _mediaObserver
     */
    constructor(
        private _pantherMatchMediaService: PantherMatchMediaService,
        private _pantherMatSidenavHelperService: PantherMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    ) {

        this.isLockedOpen = true;


        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void {
        // Register the sidenav to the service
        this._pantherMatSidenavHelperService.setSidenav(this.pantherMatSidenavHelper, this._matSidenav);

        if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._pantherMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }


    ngOnDestroy(): void {

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[pantherMatSidenavToggler]'
})
export class PantherMatSidenavTogglerDirective {
    @Input()
    pantherMatSidenavToggler: string;

    constructor(
        private _pantherMatSidenavHelperService: PantherMatSidenavHelperService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On click
     */
    @HostListener('click')
    onClick(): void {
        this._pantherMatSidenavHelperService.getSidenav(this.pantherMatSidenavToggler).toggle();
    }
}
