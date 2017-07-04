import {Component, Input, ViewEncapsulation, HostBinding, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import template from './task.html!text';

@Component({
    selector: 'ngc-task',
    host: {
        class: 'task'
    },
    template,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task {
    @Input() task;
    @Output() taskUpdated = new EventEmitter();
    @Output() taskDeleted = new EventEmitter();

    @HostBinding('class.task--done')
    get done() {
        return this.task && this.task.done;
    }

    markDone(checked) {
        this.taskUpdated.next({
            title: this.task.title,
            done: checked ? +new Date() : null
        });
    }

    deleteTask() {
        this.taskDeleted.next();
    }
}
