import {Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import template from './comment.html!text';

@Component({
    selector: 'ngc-comment',
    host: {
        class: 'comment'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Comment {
    @Input() time;
    @Input() user;
    @Input() content;
    @Output() commentEdited = new EventEmitter();

    onContentSaved(content) {
        this.commentEdited.next(content);
    }
}
