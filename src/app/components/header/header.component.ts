import { Component, OnInit } from '@angular/core';
import {NavbarModel} from "../../models/navbar.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
