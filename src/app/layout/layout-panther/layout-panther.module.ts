import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantherSharedModule } from '@panther/shared.module';

import { NavbarModule } from 'app/layout/components/navbar/navbar.module'
import { ContentModule } from 'app/layout/components/content/content.module';
import { PantherFooterModule } from 'app/layout/components/footer/footer.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { PantherToolbarModule } from 'app/layout/components/toolbar/toolbar.module';


import { LayoutPantherComponent } from 'app/layout/layout-panther/layout-panther.component';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@NgModule({
    declarations: [
        LayoutPantherComponent
    ],
    imports: [
        RouterModule,
        PantherSharedModule,
        NavbarModule,
        ContentModule,
        PantherFooterModule,
        QuickPanelModule,
        PantherToolbarModule
    ],
    exports: [
        LayoutPantherComponent
    ],
    providers: [
        PantherMenuService
    ]
})
export class LayoutPantherModule {
}




