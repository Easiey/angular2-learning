import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskList} from './task-list';
import {Task} from './task/task';

@NgModule({
    declarations: [TaskList, Task],
    imports: [CommonModule],
    exports: [TaskList]
})
export class TaskListModule {
}