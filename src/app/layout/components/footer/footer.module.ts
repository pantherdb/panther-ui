import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { pantherSharedModule } from '@panther/shared.module';

import { pantherFooterComponent } from 'app/layout/components/footer/footer.component';

@NgModule({
    declarations: [
        pantherFooterComponent
    ],
    imports: [
        RouterModule,
        pantherSharedModule
    ],
    exports: [
        pantherFooterComponent
    ]
})
export class pantherFooterModule {
}
