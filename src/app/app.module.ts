import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ContextMenuModule } from 'ngx-contextmenu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PantherModule } from '@panther/panther.module';
import { PantherProgressBarModule } from '@panther/components';

import { PantherSharedModule } from '@panther/shared.module';
import { pantherConfig } from './panther-config';
import { AppComponent } from './app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { PagesModule } from './main/pages/pages.module';
import { AppsModule } from './main/apps/apps.module';
import {
    faPaw,
    faPen,
    faSitemap,
    faUser,
    faUsers,
    faCalendarDay,
    faCalendarWeek,
    faSearch,
    faTasks,
    faListAlt,
    faChevronRight,
    faHistory,
    faShoppingBasket,
    faCopy,
    faPlus,
    faLink,
    faChevronDown,
    faLevelDownAlt,
    faLevelUpAlt,
    faArrowUp,
    faArrowDown,
    faCaretDown,
    faCaretRight,
    faAngleDoubleDown,
    faAngleDoubleUp, faUndo, faSave, faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { PantherDataService } from '@panther.common/services/panther-data.service';
import { StartupService } from './startup.service';

export function startup(startupService: StartupService) {
    return () => startupService.loadData();
}

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
        // Panther Main and Shared modules
        PantherModule.forRoot(pantherConfig),
        ContextMenuModule.forRoot(),
        PantherSharedModule,
        LayoutModule,
        RouterModule,
        MatSidenavModule,
        PantherProgressBarModule,

        //Material 
        MatSidenavModule,

        //Panther App
        PagesModule,
        AppsModule
    ],
    providers: [
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startup,
            deps: [StartupService, PantherDataService],
            multi: true
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faArrowUp,
            faArrowDown,
            faAngleDoubleUp,
            faAngleDoubleDown,
            faCalendarDay,
            faCalendarWeek,
            faCaretDown,
            faCaretRight,
            faChevronDown,
            faChevronRight,
            faCopy,
            faExclamationTriangle,
            faFacebook,
            faGithub,
            faHistory,
            faLevelDownAlt,
            faLevelUpAlt,
            faLink,
            faListAlt,
            faPaw,
            faPen,
            faPlus,
            faSave,
            faSearch,
            faShoppingBasket,
            faSitemap,
            faTasks,
            faTwitter,
            faUndo,
            faUser,
            faUsers,
        );
    }
}
