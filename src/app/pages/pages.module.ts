import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../components/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import {PagesRoutingModule} from "./pages-routing.modules";
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [ HomePageComponent, ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
