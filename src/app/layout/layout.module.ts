import { NgModule } from '@angular/core';

import { LayoutPantherModule } from 'app/layout/layout-panther/layout-panther.module';


@NgModule({
    imports: [
        LayoutPantherModule
    ],
    exports: [
        LayoutPantherModule
    ],
    declarations: []
})
export class LayoutModule {
}
