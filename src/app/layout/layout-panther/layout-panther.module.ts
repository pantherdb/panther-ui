import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantherSidebarModule } from '@panther/components';
import { PantherSharedModule } from '@panther/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';

import { LayoutPantherComponent } from 'app/layout/layout-panther/layout-panther.component';
import { PantherToolbarModule } from '../components/toolbar/toolbar.module';

@NgModule({
    declarations: [
        LayoutPantherComponent
    ],
    imports: [
        RouterModule,
        PantherSharedModule,
        PantherSidebarModule,
        ContentModule,
        QuickPanelModule,
        PantherToolbarModule
    ],
    exports: [
        LayoutPantherComponent
    ]
})
export class LayoutPantherModule {
}
