import {Model} from "./model.interface";

export class ImagesViewsModel implements Model{
  readonly img: string;
  readonly title: string;
  readonly subtitle: string;
  readonly isLike?: boolean;

  constructor(input: Partial<ImagesViewsModel>) {
    this.img = input.img || '';
    this.title = input.title || '';
    this.subtitle = input.subtitle || '';
    this.isLike = input.isLike || false;
  }
}
