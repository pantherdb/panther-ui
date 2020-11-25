import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'panther-panther-apps',
    templateUrl: './panther-apps.component.html',
    styleUrls: ['./panther-apps.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PantherAppsComponent implements OnInit, OnDestroy {
    @Input('sidenav')
    sidenav: MatSidenav;

    date: Date;

    private _unsubscribeAll: Subject<any>;

    constructor(
    ) {
        this.date = new Date();
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

    }


    close() {
        this.sidenav.close();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
