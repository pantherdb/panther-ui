import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { PantherModule } from '@panther/panther.module';
import { PantherSharedModule } from '@panther/shared.module';
import { PantherProgressBarModule, PantherSidebarModule, PantherThemeOptionsModule } from '@panther/components';

import {
    faSitemap,
    faPaw, faUser,
    faUsers, faListAlt,
    faClock, faCalendarDay, faCalendarWeek,
    faHistory, faSearch, faTasks, faPlus,
    faCog, faCheck, faHeart, faTimes, faBookReader,
    faStreetView, faTree, faHiking, faBed, faUserFriends,
    faMoon, faSkiing, faPhotoVideo, faPray, faHeartbeat, faSwimmer, faFileInvoiceDollar, faLanguage, faLongArrowAltDown, faBackward, faFastBackward, faForward, faPlay
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { pantherConfig } from 'app/panther-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { StartupService } from './startup.service';
import { AppsModule } from './main/apps/apps.module';
import { FakeDbService } from '@panther/fakedb/services/fake-db.service';
import { PantherSplashScreenService } from '@panther/services/splash-screen.service';

export function startup(startupService: StartupService) {
    return () => startupService.loadData();
}

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,
        // Panther modules
        PantherModule.forRoot(pantherConfig),
        PantherProgressBarModule,
        PantherSharedModule,
        PantherSidebarModule,
        PantherThemeOptionsModule,

        AppsModule,
        LayoutModule,

    ],
    providers: [
        PantherSplashScreenService
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(
            faBackward,
            faCalendarDay,
            faCalendarWeek,
            faCheck,
            faClock,
            faCog,
            faFacebook,
            faFastBackward,
            faForward,
            faHeart,
            faGithub,
            faHistory,
            faListAlt,
            faLongArrowAltDown,
            faPaw,
            faPlus,
            faSearch,
            faSitemap,
            faTasks,
            faTimes,
            faTwitter,
            faUser,
            faUsers,
            faBookReader
            , faStreetView
            , faTree
            , faHiking
            , faHeart
            , faUsers
            , faBed
            , faHeart
            , faUserFriends
            , faMoon
            , faSkiing
            , faPhotoVideo
            , faPray
            , faPlay
            , faHeartbeat
            , faPaw
            , faSwimmer
            , faFileInvoiceDollar
            , faLanguage
        );
    }
}
