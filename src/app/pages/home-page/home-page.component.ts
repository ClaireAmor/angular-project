import { Component, OnInit } from '@angular/core';
import {NavbarModel} from "../../models/navbar.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  homeNavbarData: NavbarModel[];
  constructor() {
    this.homeNavbarData = [
      new NavbarModel({
        name: "Home",
        link: "home-page"
      }),
      new NavbarModel({
        name: "contact",
        link: "contact"
      })
    ]
  }

  ngOnInit(): void {
  }

}
