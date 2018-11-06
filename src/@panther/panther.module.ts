import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { NOCTUA_CONFIG, PantherConfigService } from './services/config.service';
import { PantherMatchMediaService } from './services/match-media.service';
import { PantherSplashScreenService } from './services/splash-screen.service';
import { PantherTranslationLoaderService } from './services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers: [
        PantherConfigService,
        PantherMatchMediaService,
        PantherSplashScreenService,
        PantherTranslationLoaderService
    ]
})
export class PantherModule {
    constructor(@Optional() @SkipSelf() parentModule: PantherModule) {
        if (parentModule) {
            throw new Error('PantherModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: PantherModule,
            providers: [
                {
                    provide: NOCTUA_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
