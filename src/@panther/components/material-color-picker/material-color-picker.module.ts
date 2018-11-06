import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { PantherPipesModule } from '../../pipes/pipes.module';
import { PantherMaterialColorPickerComponent } from './material-color-picker.component';

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
        MatRippleModule,
        PantherPipesModule
    ],
    exports: [
        PantherMaterialColorPickerComponent
    ],
})
export class PantherMaterialColorPickerModule {
}
