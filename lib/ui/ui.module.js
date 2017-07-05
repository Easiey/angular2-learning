import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Checkbox} from './checkbox/checkbox';
import {Toggle} from './toggle/toggle';
import {Tabs} from "./tabs/tabs";
import {Tab} from "./tabs/tab/tab";
import {Editor} from "./editor/editor";

@NgModule({
    declarations: [Checkbox, Toggle, Tab, Tabs, Editor],
    imports: [CommonModule],
    exports: [Checkbox, Toggle, Tab, Tabs, Editor]
})
export class UIModule {
}
