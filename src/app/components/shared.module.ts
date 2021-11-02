import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { ImagesViewComponent } from './images-view/images-view.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { ButtonLikeComponent } from './button-like/button-like.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [


    ImagesViewComponent,
         HeaderComponent,
         ButtonLikeComponent,
         ImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ImagesViewComponent,
    ButtonLikeComponent
  ]
})
export class SharedModule {
}
