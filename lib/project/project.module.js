import { NgModule } from '@angular/core';
import {TaskListModule} from '../task-list/task-list.module';
import {CommentsModule} from '../comments/comments.module';
import {Project} from './project';
import {UIModule} from '../ui/ui.module';
import {ProjectRoutingModule} from './project.routing';
import {ProjectTaskList} from './project-task-list/project-task-list';
import {ProjectComments} from './project-comments/project-comments';

@NgModule({
    declarations: [Project, ProjectTaskList, ProjectComments],
    imports: [TaskListModule, UIModule, CommentsModule, ProjectRoutingModule],
    exports: [Project]
})
export class ProjectModule {}
