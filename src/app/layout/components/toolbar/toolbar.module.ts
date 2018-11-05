import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';
import { pantherSharedModule } from '@panther/shared.module';
import { pantherToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        pantherToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        pantherSharedModule,
    ],
    exports: [
        pantherToolbarComponent
    ]
})

export class pantherToolbarModule {
}
