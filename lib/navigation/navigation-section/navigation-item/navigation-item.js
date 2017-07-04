import {Component, ViewEncapsulation, Input, Inject} from '@angular/core';
import template from './navigation-item.html!text';

import {Navigation} from '../../navigation';

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

    constructor(@Inject(Navigation) navigation) {
        this.navigation = navigation;
    }

    isActive() {
        return this.navigation.isItemActive(this);
    }

    onActivate() {
        this.navigation.activateLink(this.link);
    }
}
