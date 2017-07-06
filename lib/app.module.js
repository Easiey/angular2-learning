import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {App}   from './app';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ProjectModule} from './project/project.module';
import {NavigationModule} from './navigation/navigation.module';

import {DataProvider} from '../data-access/data-provider';

const ROUTES = [
    {
        path: '',
        redirectTo: '/projects/zti/tasks',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [App],
    imports: [
        BrowserModule, ProjectModule, NavigationModule,
        RouterModule.forRoot(ROUTES)
    ],
    bootstrap: [App],
    providers: [DataProvider, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
}
