import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutPantherModule } from 'app/layout/layout-panther/layout-panther.module';


@NgModule({
    imports: [
        MatSidenavModule,
        LayoutPantherModule
    ],
    exports: [
        LayoutPantherModule
    ],
    declarations: []
})
export class LayoutModule {
}
