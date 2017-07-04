import {Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import template from './task-list.html!text';

@Component({
    selector: 'ngc-task-list',
    host: {
        class: 'task-list'
    },
    template,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskList {
    @Input() tasks;
    @Output() tasksUpdated = new EventEmitter();

    constructor() {
        this.taskFilterList = ['wszystkie', 'otwarte', 'wykonane'];
        this.selectedTaskFilter = 'wszystkie';
    }

    ngOnChanges(changes) {
        if (changes.tasks) {
            this.taskFilterChange(this.selectedTaskFilter);
        }
    }

    taskFilterChange(filter) {
        this.selectedTaskFilter = filter;
        this.filteredTasks = this.tasks ? this.tasks.filter((task) => {
            if (filter === 'wszystkie') {
                return true;
            } else if (filter === 'otwarte') {
                return !task.done;
            } else {
                return task.done;
            }
        }) : [];
    }

    onTaskUpdated(task, updatedData) {
        const tasks = this.tasks.slice();
        tasks.splice(tasks.indexOf(task), 1, Object.assign({}, task, updatedData));
        this.tasksUpdated.next(tasks);
    }

    onTaskDeleted(task) {
        const tasks = this.tasks.slice();
        tasks.splice(tasks.indexOf(task), 1);
        this.tasksUpdated.next(tasks);
    }

    /**
     * Returns filtered tasks.
     *
     * @returns {any}
     */
    getFilteredTasks() {
        return this.taskListService.tasks ? this.taskListService.tasks.filter((task) => {
            if (this.selectedTaskFilter === 'wszystkie') {
                return true;
            } else if (this.selectedTaskFilter === 'otwarte') {
                return !task.done;
            } else {
                return task.done;
            }
        }) : [];
    }

    /**
     * Function adds task to list service.
     *
     * @param title - task title
     */
    addTask(title) {
        const tasks = this.tasks.slice();
        tasks.push({
            created: +new Date(),
            title,
            done: null
        });
        this.tasksUpdated.next(tasks);
    }
}
