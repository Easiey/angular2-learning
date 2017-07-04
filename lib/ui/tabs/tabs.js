import {Component, ViewEncapsulation, ContentChildren} from '@angular/core';
import template from './tabs.html!text';
import {Tab} from './tab/tab';

@Component({
    selector: 'ngc-tabs',
    host: {
        class: 'tabs'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Tabs {
    @ContentChildren(Tab) tabs;

    ngAfterContentInit() {
        this.activateTab(this.tabs.first);
    }

    activateTab(tab) {
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}
