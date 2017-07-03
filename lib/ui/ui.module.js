import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Checkbox} from './checkbox/checkbox';
import {Toggle} from './toggle/toggle';

@NgModule({
    declarations: [Checkbox, Toggle],
    imports: [CommonModule],
    exports: [Checkbox, Toggle]
})
export class UIModule {
}
