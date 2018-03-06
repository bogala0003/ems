import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<string>, arg1: string): Array<string> {
    if (arg1 = 'desc') {
      array.sort((a: any, b: any) => a < b ? -1 : (a > b ? 1 : 0));
    } else {
      array.sort((a: any, b: any) => a < b ? 1 : (a > b ? -1 : 0));
    }
    return array;
  }

}
