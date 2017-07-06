import {Component, ViewEncapsulation, Input} from '@angular/core';
import template from './tabs.html!text';

@Component({
    selector: 'ngc-tabs',
    host: {
        class: 'tabs'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Tabs {
    @Input() items;
}
