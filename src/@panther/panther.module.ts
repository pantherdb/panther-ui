import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { panther_CONFIG, pantherConfigService } from './services/config.service';
import { pantherMatchMediaService } from './services/match-media.service';
import { pantherSplashScreenService } from './services/splash-screen.service';
import { pantherTranslationLoaderService } from './services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers: [
        pantherConfigService,
        pantherMatchMediaService,
        pantherSplashScreenService,
        pantherTranslationLoaderService
    ]
})
export class pantherModule {
    constructor(@Optional() @SkipSelf() parentModule: pantherModule) {
        if (parentModule) {
            throw new Error('pantherModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: pantherModule,
            providers: [
                {
                    provide: panther_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
