import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PantherConfigService } from '@panther/services/config.service';

@Component({
    selector: 'panther-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class PantherSearchBarComponent implements OnInit, OnDestroy {
    collapsed: boolean;
    pantherConfig: any;

    @Output()
    input: EventEmitter<any>;


    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PantherConfigService} _pantherConfigService
     */
    constructor(
        private _pantherConfigService: PantherConfigService
    ) {

        this.input = new EventEmitter();
        this.collapsed = true;


        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void {
        // Subscribe to config changes
        this._pantherConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (config) => {
                    this.pantherConfig = config;
                }
            );
    }


    ngOnDestroy(): void {

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapse
     */
    collapse(): void {
        this.collapsed = true;
    }

    /**
     * Expand
     */
    expand(): void {
        this.collapsed = false;
    }

    /**
     * Search
     *
     * @param event
     */
    search(event): void {
        this.input.emit(event.target.value);
    }

}
