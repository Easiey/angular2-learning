import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App}   from './app';
import {DataProvider} from '../data-access/data-provider';
import {ProjectModule} from "./project/project.module";
import {NavigationModule} from "./navigation/navigation.module";

@NgModule({
    declarations: [App],
    imports: [BrowserModule, ProjectModule, NavigationModule],
    bootstrap: [App],
    providers: [DataProvider]
})
export class AppModule {
}