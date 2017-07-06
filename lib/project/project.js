import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import template from './project.html!text';
import {DataProvider} from '../../data-access/data-provider';
import {LiveDocument} from '../../data-access/live-document';


@Component({
    selector: 'ngc-project',
    host: {
        class: 'project'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Project {

    constructor(@Inject(DataProvider) dataProvider,
                @Inject(ActivatedRoute) route) {
        this.dataProvider = dataProvider;
        this.route = route;
        this.tabItems = [
            {title: 'Zadania', link: ['tasks']},
            {title: 'Komentarze', link: ['comments']}
        ];
    }

    ngOnInit() {
        this.routeParams = this.route.params.subscribe(params => {
            this.id = params['projectId'];
            if (this.document) {
                this.document.unsubscribe();
            }
            this.document = new LiveDocument(this.dataProvider, {
                type: 'project',
                _id: this.id
            });
            this.document.change.subscribe((data) => {
                this.title = data.title;
                this.description = data.description;
                this.tasks = data.tasks;
                this.comments = data.comments;
            });
        });
    }

    updateTasks(tasks) {
        this.document.data.tasks = tasks;
        this.document.persist();
    }

    updateComments(comments) {
        this.document.data.comments = comments;
        this.document.persist();
    }

    ngOnDestroy() {
        this.routeParams.unsubscribe();
        this.document.unsubscribe();
    }
}
