import {Component, ViewEncapsulation, Input} from '@angular/core';
import template from './navigation-section.html!text';

@Component({
    selector: 'ngc-navigation-section',
    host: {
        class: 'navigation-section'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class NavigationSection {
    @Input() title;
    @Input() items;
}
