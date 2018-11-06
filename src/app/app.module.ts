import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { MatSidenavModule } from '@angular/material';
import { PantherModule } from '@panther/panther.module';
import { PantherProgressBarModule } from '@panther/components';

import { PantherSharedModule } from '@panther/shared.module';
import { pantherConfig } from './panther-config';
import { AppComponent } from './app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { PagesModule } from './main/pages/pages.module';
import { AppsModule } from './main/apps/apps.module';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Panther Main and Shared modules
        PantherModule.forRoot(pantherConfig),
        PantherSharedModule,
        LayoutModule,
        RouterModule,
        MatSidenavModule,
        PantherProgressBarModule,

        //Panther App
        PagesModule,
        AppsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
