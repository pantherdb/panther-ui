import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantherSharedModule } from '@panther/shared.module';

import { NavbarComponent } from '../navbar/navbar.component';

import { PantherMenuService } from '@panther.common/services/panther-menu.service';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule,
        PantherSharedModule,
    ],
    exports: [
        NavbarComponent
    ],
    providers: [
        PantherMenuService
    ]
})
export class NavbarModule {
}




