import {Model} from "./model.interface";
import {random} from "faker";

export class ImagesViewsModel implements Model{
  readonly avatarImg: string;
  readonly title: string;
  readonly postImg: string;
  numberOflike: number;
  readonly subtitle: string;

  constructor(input: Partial<ImagesViewsModel>) {
    this.avatarImg = input.avatarImg || '';
    this.title = input.title || '';
    this.postImg = input.postImg || '';
    this.numberOflike = typeof input.numberOflike === "number" ? input.numberOflike : Math.floor(Math.random() * 20);
    this.subtitle = input.subtitle || '';
  }

}

export type ImagesViewList = ImagesViewsModel[];
