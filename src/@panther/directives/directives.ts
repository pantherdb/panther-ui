import { NgModule } from '@angular/core';

import { pantherPerfectScrollbarDirective } from './panther-perfect-scrollbar/panther-perfect-scrollbar.directive';

@NgModule({
    declarations: [
        pantherPerfectScrollbarDirective
    ],
    imports: [],
    exports: [
        pantherPerfectScrollbarDirective
    ]
})
export class pantherDirectivesModule {
}
