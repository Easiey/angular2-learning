import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Checkbox} from './checkbox/checkbox';
import {Toggle} from './toggle/toggle';
import {Tabs} from "./tabs/tabs";
import {Tab} from "./tabs/tab/tab";

@NgModule({
    declarations: [Checkbox, Toggle, Tab, Tabs],
    imports: [CommonModule],
    exports: [Checkbox, Toggle, Tab, Tabs]
})
export class UIModule {
}
