import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherSearchBarModule } from '@panther.search';
import { PantherToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

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
        PantherSearchBarModule
    ],
    exports: [
        PantherToolbarComponent
    ]
})

export class PantherToolbarModule {
}
