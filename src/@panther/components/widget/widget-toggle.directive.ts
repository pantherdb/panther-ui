import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[pantherWidgetToggle]'
})
export class pantherWidgetToggleDirective {
    constructor(public el: ElementRef) {
    }
}
