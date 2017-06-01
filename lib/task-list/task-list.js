import {Component, ViewEncapsulation} from '@angular/core';
import template from './task-list.html!text';

@Component({
    selector: 'ngc-task-list',
    host: {
        class: 'task-list'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class TaskList {
    constructor() {
        this.tasks = [
            {title: 'Zadanie 1', done: false},
            {title: 'Zadanie 2', done: true}
        ];
    }

    /**
     * Function adds task to list
     *
     * @param title - task title
     */
    addTask(title) {
        this.tasks.push({
            title, done: false
        })
    }
}
