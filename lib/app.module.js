import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App}   from './app';
import {DataProvider} from '../data-access/data-provider';
import {ProjectModule} from "./project/project.module";

@NgModule({
    declarations: [App],
    imports: [BrowserModule, ProjectModule],
    bootstrap: [App],
    providers: [DataProvider]
})
export class AppModule {
}