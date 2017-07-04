import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import template from './navigation.html!text';


@Component({
    selector: 'ngc-navigation',
    host: {
        class: 'navigation'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Navigation {
    @Input() activeLink;
    @Output() activeLinkChange = new EventEmitter();

    isItemActive(item) {
        return item.link === this.activeLink;
    }

    activateLink(link) {
        this.activeLink = link;
        this.activeLinkChange.next(this.activeLink);
    }
}
