import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { pantherPipesModule } from '../../pipes/pipes.module';
import { pantherMaterialColorPickerComponent } from './material-color-picker.component';

@NgModule({
    declarations: [
        pantherMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,
        pantherPipesModule
    ],
    exports: [
        pantherMaterialColorPickerComponent
    ],
})
export class pantherMaterialColorPickerModule {
}
