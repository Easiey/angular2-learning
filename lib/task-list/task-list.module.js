import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskList} from './task-list';
import {Task} from './task/task';
import {EnterTask} from './enter-task/enter-task';
import {UIModule} from '../ui/ui.module';

@NgModule({
    declarations: [TaskList, Task, EnterTask],
    imports: [CommonModule, UIModule],
    exports: [TaskList]
})
export class TaskListModule {
}