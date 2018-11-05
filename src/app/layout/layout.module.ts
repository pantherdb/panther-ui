import { NgModule } from '@angular/core';

import { LayoutpantherModule } from 'app/layout/layout-panther/layout-panther.module';


@NgModule({
    imports: [
        LayoutpantherModule
    ],
    exports: [
        LayoutpantherModule
    ]
})
export class LayoutModule {
}
