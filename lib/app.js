import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {ProjectService} from './project/project-service/project-service';
import {UserService} from './user/user-service/user-service';
import template from './app.html!text';

@Component({
    selector: 'ngc-app',
    template,
    encapsulation: ViewEncapsulation.None,
    providers: [ProjectService, UserService]
})
export class App {
    constructor(@Inject(ProjectService) projectService) {
        this.projectService = projectService;
        this.projects = [];
        this.projectsSubscription = projectService.change
            .subscribe((projects) => {
                this.projects = projects;
                this.projectNavigationItems = this.projects
                    .filter((project) => !project.deleted)
                    .map((project) => {
                        return {
                            title: project.title,
                            link: ['/projects', project._id]
                        };
                    });
            });
    }

    ngOnDestroy() {
        this.projectsSubscription.unsubscribe();
    }
}
