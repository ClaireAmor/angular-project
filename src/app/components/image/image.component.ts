import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ImagesViewsModel} from "../../models/interface/images-views.model";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageModel: ImagesViewsModel = new ImagesViewsModel({});

  @Output()toggleLikeEvent = new EventEmitter<boolean>();

  isLike: boolean = false;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);
    this.changeDetectorRef.detectChanges();
  }

  onEmitToggleLikeEvent(event: boolean) {
    console.log(event)
    this.changeDetectorRef.detectChanges();
    this.isLike = event;
    this.toggleLikeEvent.emit(event);
  }


}
