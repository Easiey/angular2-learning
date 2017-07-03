import {Component, ViewEncapsulation, Inject} from '@angular/core';
import template from './task-list.html!text';

import {TaskListService} from './task-list-service';

@Component({
    selector: 'ngc-task-list',
    host: {
        class: 'task-list'
    },
    template,
    providers: [TaskListService],
    encapsulation: ViewEncapsulation.None
})
export class TaskList {
    constructor(@Inject(TaskListService) taskListService) {
        this.taskListService = taskListService;
        this.taskFilterList = ['wszystkie', 'otwarte', 'wykonane'];
        this.selectedTaskFilter = 'wszystkie';
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
        this.taskListService.tasks.push({
            title, done: false
        });
    }
}
