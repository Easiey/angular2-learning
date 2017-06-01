import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskList} from './task-list';
import {Task} from './task/task';
import {EnterTask} from './enter-task/enter-task';

@NgModule({
    declarations: [TaskList, Task, EnterTask],
    imports: [CommonModule],
    exports: [TaskList]
})
export class TaskListModule {
}