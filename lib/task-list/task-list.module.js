import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskList} from './task-list';

@NgModule({
    declarations: [TaskList],
    imports: [CommonModule],
    exports: [TaskList]
})
export class TaskListModule {
}