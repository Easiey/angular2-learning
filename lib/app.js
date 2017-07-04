import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {ProjectService} from './project/project-service/project-service';
import template from './app.html!text';

class LinkConverter {
    static getIdFromLink(link) {
        return link.slice(1);
    }

    static getItemModelFromProject(project) {
        return project ? {
            title: project.title,
            link: `#${project._id}`
        } : {
            title: '',
            link: '#'
        };
    }
}

@Component({
    selector: 'ngc-app',
    template,
    encapsulation: ViewEncapsulation.None,
    providers: [ProjectService]
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
                    .map((project) => LinkConverter.getItemModelFromProject(project));
                if (this.selectedProject) {
                    this.selectedProject = this.projects.find((project) => project._id === this.selectedProject._id);
                }
            });
    }

    getSelectedProjectLink() {
        return LinkConverter.getItemModelFromProject(this.selectedProject).link;
    }

    selectProjectByLink(link) {
        this.selectedProject = this.projects
            .find((project) => project._id === LinkConverter.getIdFromLink(link));
    }

    updateSelectedProject(projectData) {
        Object.assign(this.selectedProject, projectData);
        this.projectService.dataProvider.createOrUpdateDocument(this.selectedProject);
    }

    ngOnDestroy() {
        this.projectsSubscription.unsubscribe();
    }
}
