import { NgModule } from '@angular/core';

import { pantherWidgetComponent } from './widget.component';
import { pantherWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        pantherWidgetComponent,
        pantherWidgetToggleDirective
    ],
    exports: [
        pantherWidgetComponent,
        pantherWidgetToggleDirective
    ],
})
export class pantherWidgetModule {
}
