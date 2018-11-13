import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PantherDirectivesModule } from './directives/directives';
import { PantherPipesModule } from './pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        PantherDirectivesModule,
        PantherPipesModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        PantherDirectivesModule,
        PantherPipesModule
    ]
})

export class PantherSharedModule { }
