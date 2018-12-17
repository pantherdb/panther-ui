import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PantherDirectivesModule } from './directives/directives';
import { PantherPipesModule } from './pipes/pipes.module';

import { HttpClient } from '@angular/common/http';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        PantherDirectivesModule,
        PantherPipesModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        PantherDirectivesModule,
        PantherPipesModule,
        MarkdownModule
    ]
})

export class PantherSharedModule { }
