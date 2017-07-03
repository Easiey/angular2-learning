import {Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './checkbox.html!text';

@Component({
    selector: 'ngc-checkbox',
    host: {
        class: 'checkbox'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Checkbox {
    @Input() label;
    @Input() checked;
    @Output() checkedChange = new EventEmitter();

    onCheckedChange(checked) {
        this.checkedChange.next(checked);
    }
}