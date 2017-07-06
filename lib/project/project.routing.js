import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProjectTaskList} from './project-task-list/project-task-list';
import {ProjectComments} from './project-comments/project-comments';
import {Project} from './project';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'projects/:projectId',
                component: Project,
                children: [
                    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
                    {path: 'tasks', component: ProjectTaskList},
                    {path: 'comments', component: ProjectComments}
                ]
            },
        ])
    ],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
