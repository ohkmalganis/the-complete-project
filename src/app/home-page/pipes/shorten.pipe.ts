import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform{

  transform(value: string): any {
    if(value.length > 10) {
      return value.substring(0,10) + '...';
    } else {
      return value;
    }
  }
}
