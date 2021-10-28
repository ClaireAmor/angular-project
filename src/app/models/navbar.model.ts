import {Model} from "./interface/model.interface";

export class NavbarModel implements Model{
  readonly name: string;
  readonly link: string;

  constructor(input: Partial<NavbarModel>) {
    this.name = input.name || '';
    this.link = input.link || '';
  }
}
