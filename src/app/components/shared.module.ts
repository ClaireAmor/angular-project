import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { ImagesViewComponent } from './images-view/images-view.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [


    ImagesViewComponent,
         HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {
}
