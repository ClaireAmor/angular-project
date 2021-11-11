import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {ContactPageComponent} from "./contact-page/contact-page.component";

const routes: Routes = [
  {
    path: '', // Chemin par défaut http://localhost:51101 ou serveur renvoie sur /home-page
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page', // correspond à http://localhost:51101/home-page
    component: HomePageComponent
  },
  {
    path: 'contact-page', // correspond à http://localhost:51101/home-page
    component: ContactPageComponent
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
