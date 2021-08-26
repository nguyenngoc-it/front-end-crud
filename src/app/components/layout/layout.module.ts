import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodterComponent } from './foodter/foodter.component';
import { ContentComponent } from './content/content.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NavbarComponent } from './navbar/navbar.component';






@NgModule({
  declarations: [
    FoodterComponent,
    ContentComponent,
    SlidebarComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
