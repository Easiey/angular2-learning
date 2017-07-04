import {NgModule} from '@angular/core';
import {TaskListModule} from '../task-list/task-list.module';
import {Project} from './project';
import {UIModule} from '../ui/ui.module';

@NgModule({
    declarations: [Project],
    imports: [TaskListModule, UIModule],
    exports: [Project]
})
export class ProjectModule {
}
