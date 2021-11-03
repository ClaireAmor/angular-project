import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-like',
  templateUrl: './button-like.component.html',
  styleUrls: ['./button-like.component.css']
})
export class ButtonLikeComponent implements OnInit {

  @Output()toggleLikeEvent = new EventEmitter<boolean>();
  constructor() { }

  result = true;
  emitToggleLikeEvent(event: boolean) {
    this.toggleLikeEvent.emit(event);
    this.result = !this.result;
  }

  ngOnInit(): void {
  }

}
