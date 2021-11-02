import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as faker from "faker"
import {ImagesViewsModel} from "../../models/interface/images-views.model";
@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit {

  imagesViewList: ImagesViewsModel[];
  toogleLike: boolean = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.imagesViewList = [
      new ImagesViewsModel({
        img: faker.image.imageUrl( 140, 140, undefined, true, true),
        title: "Post of " + faker.name.firstName(undefined) + " " + faker.name.lastName(),
        subtitle : faker.lorem.paragraph(1),
        isLike: false
      }),
      new ImagesViewsModel({
        img: faker.image.imageUrl( 140, 140, undefined, true, true),
        title: "Post of " + faker.name.firstName(undefined) + " " + faker.name.lastName(),
        subtitle : faker.lorem.paragraph(1),
        isLike: true
      }),
      new ImagesViewsModel({
        img: faker.image.imageUrl( 140, 140, undefined, true, true),
        title: "Post of " + faker.name.firstName(undefined) + " " + faker.name.lastName(),
        subtitle : faker.lorem.paragraph(1),
        isLike: false
      })
    ]
  }

  ngOnInit(): void {
  }



}
