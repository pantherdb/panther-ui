import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { PantherDemoContentComponent } from './demo-content/demo-content.component';
import { PantherDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        PantherDemoContentComponent,
        PantherDemoSidebarComponent
    ],
    imports: [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports: [
        PantherDemoContentComponent,
        PantherDemoSidebarComponent
    ]
})
export class PantherDemoModule {
}
