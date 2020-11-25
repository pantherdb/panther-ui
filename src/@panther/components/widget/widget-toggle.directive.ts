import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[pantherWidgetToggle]'
})
export class PantherWidgetToggleDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    ) {
    }
}
