import { NgModule } from '@angular/core';

import { PantherHighlightComponent } from '@panther/components/highlight/highlight.component';

@NgModule({
    declarations: [
        PantherHighlightComponent
    ],
    exports: [
        PantherHighlightComponent
    ],
})
export class PantherHighlightModule {
}
