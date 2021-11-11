import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import * as faker from "faker"
import {ImagesViewList, ImagesViewsModel} from "../../models/interface/images-views.model";
@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit {

  @Input() imagesViewList: ImagesViewList = [];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  onEmitToggleLikeEvent(event: boolean, index: number) {
    console.log(event)
    this.changeDetectorRef.detectChanges();

    if(this.imagesViewList[index] !== undefined) {
      if(event){
        this.imagesViewList[index].numberOflike++;

      } else {
        this.imagesViewList[index].numberOflike--;
      }
    }
  }

}
