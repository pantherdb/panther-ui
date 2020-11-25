import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PantherProgressBarService } from '@panther/components/progress-bar/progress-bar.service';

@Component({
    selector: 'panther-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PantherProgressBarComponent implements OnInit, OnDestroy {
    bufferValue: number;
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value: number;
    visible: boolean;


    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {PantherProgressBarService} _pantherProgressBarService
     */
    constructor(
        private _pantherProgressBarService: PantherProgressBarService
    ) {



        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void {
        // Subscribe to the progress bar service properties

        // Buffer value
        this._pantherProgressBarService.bufferValue
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((bufferValue) => {
                this.bufferValue = bufferValue;
            });

        // Mode
        this._pantherProgressBarService.mode
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mode) => {
                this.mode = mode;
            });

        // Value
        this._pantherProgressBarService.value
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.value = value;
            });

        // Visible
        this._pantherProgressBarService.visible
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((visible) => {
                this.visible = visible;
            });

    }


    ngOnDestroy(): void {

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

}
