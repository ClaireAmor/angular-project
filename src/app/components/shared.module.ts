import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { ImagesViewComponent } from './images-view/images-view.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { ButtonLikeComponent } from './button-like/button-like.component';
import { ImageComponent } from './image/image.component';
import { ContactComponent } from './contact/contact.component';
import {AddLikePipe} from "../pipes/add-like.pipe";

@NgModule({
  declarations: [


    ImagesViewComponent,
         HeaderComponent,
         ButtonLikeComponent,
         ImageComponent,
         ContactComponent,
        AddLikePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
    exports: [
        HeaderComponent,
        ImagesViewComponent,
        ButtonLikeComponent,
        ContactComponent,
        AddLikePipe
    ]
})
export class SharedModule {
}
