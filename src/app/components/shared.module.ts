import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { ImagesViewComponent } from './images-view/images-view.component';

@NgModule({
  declarations: [

  
    ImagesViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class SharedModule {
}
