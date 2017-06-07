import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Checkbox} from './checkbox/checkbox';

@NgModule({
    declarations: [Checkbox],
    imports: [CommonModule],
    exports: [Checkbox]
})
export class UIModule {
}