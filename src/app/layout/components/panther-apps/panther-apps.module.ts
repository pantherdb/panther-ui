import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherAppsComponent } from './panther-apps.component';


@NgModule({
    declarations: [
        PantherAppsComponent
    ],
    imports: [
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,

        PantherSharedModule,
    ],
    exports: [
        PantherAppsComponent
    ]
})
export class PantherAppsModule {
}
