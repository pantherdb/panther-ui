import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PantherDirectivesModule } from './directives/directives';
import { PantherPipesModule } from './pipes/pipes.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PantherDirectivesModule,
        PantherPipesModule,
        DragDropModule,
        NgxGraphModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        PantherDirectivesModule,
        PantherPipesModule,
        DragDropModule,
        NgxGraphModule,
        FontAwesomeModule
    ]
})

export class PantherSharedModule { }
