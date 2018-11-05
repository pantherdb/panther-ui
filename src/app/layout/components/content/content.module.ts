import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { pantherSharedModule } from '@panther/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        pantherSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
