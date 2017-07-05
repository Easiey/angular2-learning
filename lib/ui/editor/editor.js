import {
    Component,
    ViewChild,
    Input,
    Output,
    ViewEncapsulation,
    EventEmitter,
    HostBinding,
    HostListener
} from '@angular/core';
import template from './editor.html!text';

@Component({
    selector: 'ngc-editor',
    host: {
        class: 'editor'
    },
    template,
    encapsulation: ViewEncapsulation.None
})
export class Editor {
    @ViewChild('editableContentElement') editableContentElement;
    @Input() content;
    @Input() @HostBinding('class.editor--edit-mode') editMode;
    @Input() showControls;
    @Output() editSaved = new EventEmitter();
    @Output() editableInput = new EventEmitter();

    ngOnChanges() {
        if (this.editableContentElement && this.content) {
            this.setEditableContent(this.content);
        }
    }

    ngAfterViewInit() {
        this.setEditableContent(this.content);
    }

    getEditableContent() {
        return this.editableContentElement.nativeElement.textContent;
    }

    setEditableContent(content) {
        this.editableContentElement.nativeElement.textContent = content;
    }

    @HostListener('click')
    focusEditableContent() {
        if (this.editMode) {
            this.editableContentElement.nativeElement.focus();
        }
    }

    onInput() {
        this.editableInput.next(this.getEditableContent());
    }

    save() {
        this.editSaved.next(this.getEditableContent());
        this.setEditableContent(this.content);
        this.editMode = false;
    }

    cancel() {
        this.setEditableContent(this.content);
        this.editableInput.next(this.getEditableContent());
        this.editMode = false;
    }

    edit() {
        this.editMode = true;
    }
}
