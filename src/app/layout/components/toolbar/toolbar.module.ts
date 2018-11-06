import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        PantherToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        PantherSharedModule,
    ],
    exports: [
        PantherToolbarComponent
    ]
})

export class PantherToolbarModule {
}
