import {Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './toggle.html!text';

@Component({
    selector: 'ngc-toggle',
    host: {
        class: 'toggle'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Toggle {
    @Input() buttonList;
    @Input() selectedButton;
    @Output() selectedButtonChange = new EventEmitter();

    ngOnInit() {
        if (this.selectedButton === undefined) {
            this.selectedButton = this.buttonList[0];
        }
    }

    onButtonActivate(button) {
        this.selectedButton = button;
        this.selectedButtonChange.next(button);
    }
}
