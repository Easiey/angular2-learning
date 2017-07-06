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

}
