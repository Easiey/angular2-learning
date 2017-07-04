import { NgModule } from '@angular/core';
import {Navigation} from './navigation';
import {NavigationItem} from './navigation-section/navigation-item/navigation-item';
import {NavigationSection} from './navigation-section/navigation-section';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [Navigation, NavigationItem, NavigationSection],
  imports: [CommonModule],
  exports: [Navigation, NavigationSection]
})
export class NavigationModule {}
