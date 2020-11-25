import { NgModule } from '@angular/core';

import { PantherCountdownComponent } from '@panther/components/countdown/countdown.component';

@NgModule({
    declarations: [
        PantherCountdownComponent
    ],
    exports: [
        PantherCountdownComponent
    ],
})
export class PantherCountdownModule {
}
