import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { PANTHER_CONFIG } from '@panther/services/config.service';

@NgModule()
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
                    provide: PANTHER_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
