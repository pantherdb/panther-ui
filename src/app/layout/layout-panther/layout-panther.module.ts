import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pantherSharedModule } from '@panther/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { pantherFooterModule } from 'app/layout/components/footer/footer.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { pantherToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { LayoutpantherComponent } from 'app/layout/layout-panther/layout-panther.component';

@NgModule({
    declarations: [
        LayoutpantherComponent
    ],
    imports: [
        RouterModule,
        pantherSharedModule,
        ContentModule,
        pantherFooterModule,
        QuickPanelModule,
        pantherToolbarModule
    ],
    exports: [
        LayoutpantherComponent
    ]
})
export class LayoutpantherModule {
}




