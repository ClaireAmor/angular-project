import { Component, OnInit } from '@angular/core';
import {NavbarModel} from "../../models/navbar.model";
import {ImagesViewList, ImagesViewsModel} from "../../models/interface/images-views.model";
import * as faker from "faker"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imagesViewLists: ImagesViewList[];

  constructor() {
    this.imagesViewLists = [
      [
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, "avatar", true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, "animals", true, true),
          subtitle : faker.lorem.paragraph(1),
        }),
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, "avatar", true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, "nature", true, true),
          subtitle : faker.lorem.paragraph(1),
        }),
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, 'avatar', true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, "people", true, true),
          subtitle : faker.lorem.paragraph(1),
        })
      ],
      [
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, 'avatar', true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, 'tech', true, true),
          subtitle : faker.lorem.paragraph(1),
        }),
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, 'avatar', true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, 'animals', true, true),
          subtitle : faker.lorem.paragraph(1),
        }),
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, 'avatar', true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, 'nature', true, true),
          subtitle : faker.lorem.paragraph(1),
        }),
        new ImagesViewsModel({
          avatarImg: faker.image.imageUrl( 140, 140, 'avatar', true, true),
          title: faker.name.firstName(undefined) + " " + faker.name.lastName(),
          postImg: faker.image.imageUrl( 500, 500, 'nature', true, true),
          subtitle : faker.lorem.paragraph(1),
        })
      ],

    ]
  }

  ngOnInit(): void {
  }

}
