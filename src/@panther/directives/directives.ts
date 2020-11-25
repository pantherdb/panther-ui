import { NgModule } from '@angular/core';

import { PantherIfOnDomDirective } from '@panther/directives/panther-if-on-dom/panther-if-on-dom.directive';
import { PantherInnerScrollDirective } from '@panther/directives/panther-inner-scroll/panther-inner-scroll.directive';
import { PantherPerfectScrollbarDirective } from '@panther/directives/panther-perfect-scrollbar/panther-perfect-scrollbar.directive';
import { PantherMatSidenavHelperDirective, PantherMatSidenavTogglerDirective } from '@panther/directives/panther-mat-sidenav/panther-mat-sidenav.directive';

@NgModule({
    declarations: [
        PantherIfOnDomDirective,
        PantherInnerScrollDirective,
        PantherMatSidenavHelperDirective,
        PantherMatSidenavTogglerDirective,
        PantherPerfectScrollbarDirective
    ],
    imports: [],
    exports: [
        PantherIfOnDomDirective,
        PantherInnerScrollDirective,
        PantherMatSidenavHelperDirective,
        PantherMatSidenavTogglerDirective,
        PantherPerfectScrollbarDirective
    ]
})
export class PantherDirectivesModule {
}
