import {Component, Inject, Input, Output, ViewEncapsulation, ViewChild, EventEmitter} from '@angular/core';
import template from './comments.html!text';
import {UserService} from '../user/user-service/user-service';

@Component({
    selector: 'ngc-comments',
    host: {
        class: 'comments'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Comments {
    @Input() comments;
    @Output() commentsUpdated = new EventEmitter();
    @ViewChild('newCommentEditor') newCommentEditor;

    constructor(@Inject(UserService) userService) {
        this.userService = userService;
    }

    ngOnChanges(changes) {
        if (changes.comments && changes.comments.currentValue === undefined) {
            this.comments = [];
        }
    }

    addNewComment() {
        const comments = this.comments.slice();
        comments.splice(0, 0, {
            user: this.userService.currentUser,
            time: +new Date(),
            content: this.newCommentEditor.getEditableContent()
        });

        this.commentsUpdated.next(comments);
        this.newCommentEditor.setEditableContent('');
    }

    onCommentEdited(comment, content) {
        const comments = this.comments.slice();
        if (content.length === 0) {
            comments.splice(comments.indexOf(comment), 1);
        } else {
            comments.splice(comments.indexOf(comment), 1, {
                user: comment.user,
                time: comment.time,
                content
            });
        }
        this.commentsUpdated.next(comments);
    }

    hasComments() {
        return this.comments && this.comments.length > 0;
    }
}
