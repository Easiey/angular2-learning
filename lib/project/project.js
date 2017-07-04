import {Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import template from './project.html!text';

@Component({
    selector: 'ngc-project',
    host: {
        class: 'project'
    },
    template,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Project {
    @Input() title;
    @Input() description;
    @Input() tasks;
    @Output() projectUpdated = new EventEmitter();

    updateTasks(tasks) {
        this.projectUpdated.next({
            title: this.title,
            description: this.description,
            tasks
        });
    }
}
