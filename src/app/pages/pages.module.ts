import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../components/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.modules";
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [ HomePageComponent, ContactPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
