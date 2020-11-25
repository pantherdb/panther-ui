import { PantherConfig } from '@panther/types';

/**
 * Default Panther Configuration
 *
 * You can edit these options to change the default options. All these options also can be
 * changed per component basis. See `app/main/authentication/login/login.component.ts`
 * constructor method to learn more about changing these options per component basis.
 */

export const pantherConfig: PantherConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'vertical-layout-panther',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'panther-navy-700',
            secondaryBackground: 'panther-navy-900',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'panther-white-500',
            hidden: false,
            position: 'above'
        },
        footer: {
            customBackgroundColor: true,
            background: 'panther-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};
