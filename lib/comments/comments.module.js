import {NgModule} from '@angular/core';
import {Comments} from './comments';
import {Comment} from './comment/comment';
import {CommonModule} from '@angular/common';
import {UIModule} from '../ui/ui.module';
import {FromNowPipe} from '../pipes/from-now';
import {SafeUrlPipe} from '../pipes/safe-url';

@NgModule({
    declarations: [Comments, Comment, FromNowPipe, SafeUrlPipe],
    imports: [CommonModule, UIModule],
    exports: [Comments]
})
export class CommentsModule {
}
