import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PantherMatchMediaService } from '@panther/services/match-media.service';

@Directive({
    selector: '.inner-scroll'
})
export class PantherInnerScrollDirective implements OnInit, OnDestroy {

    private _parent: any;
    private _grandParent: any;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {PantherMatchMediaService} _pantherMediaMatchService
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _pantherMediaMatchService: PantherMatchMediaService,
        private _renderer: Renderer2
    ) {

        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void {
        // Get the parent
        this._parent = this._renderer.parentNode(this._elementRef.nativeElement);

        // Return, if there is no parent
        if (!this._parent) {
            return;
        }

        // Get the grand parent
        this._grandParent = this._renderer.parentNode(this._parent);

        // Register to the media query changes
        this._pantherMediaMatchService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((alias) => {

                if (alias === 'xs') {
                    this._removeClass();
                }
                else {
                    this._addClass();
                }
            });
    }


    ngOnDestroy(): void {
        // Return, if there is no parent
        if (!this._parent) {
            return;
        }

        // Remove the class
        this._removeClass();


        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    /**
     * Add the class name
     *
     * @private
     */
    private _addClass(): void {
        // Add the inner-scroll class
        this._renderer.addClass(this._grandParent, 'inner-scroll');
    }

    /**
     * Remove the class name
     * @private
     */
    private _removeClass(): void {

        // Remove the inner-scroll class
        this._renderer.removeClass(this._grandParent, 'inner-scroll');
    }
}
