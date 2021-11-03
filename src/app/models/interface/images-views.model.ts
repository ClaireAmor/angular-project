import {Model} from "./model.interface";
import {random} from "faker";

export class ImagesViewsModel implements Model{
  readonly img: string;
  readonly title: string;
  numberOflike: number;
  readonly subtitle: string;
  readonly isLike?: boolean;

  constructor(input: Partial<ImagesViewsModel>) {
    this.img = input.img || '';
    this.title = input.title || '';
    this.numberOflike = input.numberOflike || Math.floor(Math.random() * 5);
    this.subtitle = input.subtitle || '';
    this.isLike = input.isLike || false;
  }
}
