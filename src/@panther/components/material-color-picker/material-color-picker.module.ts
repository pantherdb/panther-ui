import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
