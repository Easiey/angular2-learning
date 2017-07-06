import {Component, ViewEncapsulation, Input} from '@angular/core';
import template from './navigation-item.html!text';

@Component({
    selector: 'ngc-navigation-item',
    host: {
        class: 'navigation-item',
        role: 'listitem'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class NavigationItem {
    @Input() title;
    @Input() link;
}
