import { NgModule } from '@angular/core';

// Wczytaj moduł zawierający podstawowe dyrektywy.
import {CommonModule} from '@angular/common';

// Wczytaj moduł routera, bo jest wykorzystywany w zakładkach.
import {RouterModule} from '@angular/router';

// Wczytaj komponenty.
import {Checkbox} from './checkbox/checkbox';
import {Toggle} from './toggle/toggle';
import {Tabs} from './tabs/tabs';
import {Editor} from './editor/editor';

// Utwórz moduł listy zadań.
@NgModule({
    declarations: [Checkbox, Toggle, Tabs, Editor],
    imports: [CommonModule, RouterModule],
    exports: [Checkbox, Toggle, Tabs, Editor]
})
export class UIModule {}
