import {Component, ViewEncapsulation, Inject, forwardRef} from '@angular/core';
import template from './project-comments.html!text';
import {Project} from '../project';

@Component({
    selector: 'ngc-project-comments',
    template,
    encapsulation: ViewEncapsulation.None
})
export class ProjectComments {
    constructor(@Inject(forwardRef(() => Project)) project) {
        this.project = project;
    }

    updateComments(comments) {
        this.project.updateComments(comments);
    }
}
