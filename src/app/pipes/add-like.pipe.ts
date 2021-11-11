import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLike'
})
export class AddLikePipe implements PipeTransform {

  transform(likes: number) {
    if (likes > 1)
      return `${likes} likes`;
    else
      return `${likes} like`;
  }

}
