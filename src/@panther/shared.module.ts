import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PantherDirectivesModule } from '@panther/directives/directives';
import { PantherPipesModule } from '@panther/pipes/pipes.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PantherDirectivesModule,
        PantherPipesModule,
        NgxGraphModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PantherDirectivesModule,
        PantherPipesModule,
        NgxGraphModule,
        FontAwesomeModule
    ]
})
export class PantherSharedModule {
}
