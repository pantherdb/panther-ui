import { NgModule } from '@angular/core';

import { PantherSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        PantherSidebarComponent
    ],
    exports: [
        PantherSidebarComponent
    ]
})
export class PantherSidebarModule {
}
