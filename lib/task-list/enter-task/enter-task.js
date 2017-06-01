import {Component, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './enter-task.html!text';

@Component({
    selector: 'ngc-enter-task',
    host: {
        class: 'enter-task'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class EnterTask {
    @Output() taskEntered = new EventEmitter();

    /**
     * Function emits taskEntered event and clears input.
     *
     * @param titleInput - title provided by input
     */
    enterTask(titleInput) {
        this.taskEntered.next(titleInput.value);
        titleInput.value = '';
        titleInput.focus();
    }
}