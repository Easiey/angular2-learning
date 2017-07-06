import {Component, ViewEncapsulation, Inject, forwardRef} from '@angular/core';
import template from './project-task-list.html!text';
import {Project} from '../project';

@Component({
    selector: 'ngc-project-task-list',
    template,
    encapsulation: ViewEncapsulation.None
})
export class ProjectTaskList {
    constructor(@Inject(forwardRef(() => Project)) project) {
        this.project = project;
    }

    updateTasks(tasks) {
        this.project.updateTasks(tasks);
    }
}
