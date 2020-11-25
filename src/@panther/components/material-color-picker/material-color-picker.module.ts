import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PantherPipesModule } from '@panther/pipes/pipes.module';

import { PantherMaterialColorPickerComponent } from '@panther/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        PantherMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        PantherPipesModule
    ],
    exports: [
        PantherMaterialColorPickerComponent
    ],
})
export class PantherMaterialColorPickerModule {
}
