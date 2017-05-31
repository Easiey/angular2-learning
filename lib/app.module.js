import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App} from './app';

@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App],
})
export class AppModule {
}