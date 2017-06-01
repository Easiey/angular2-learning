import {TaskListModule} from './task-list/task-list.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from './app';

@NgModule({
    declarations: [App],
    imports: [BrowserModule, TaskListModule],
    bootstrap: [App],
})
export class AppModule {
}