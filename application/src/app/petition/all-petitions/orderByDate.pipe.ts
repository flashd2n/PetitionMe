import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
  array;

  transform(array: Array<string>, args: string, date, signups): Array<string> {

    if (!array || array === undefined || array.length === 0) {
      return null;
    }

      array.sort((a: any, b: any) => {
        if (a.creationDate < b.creationDate) {
          return 1;
        } else if (a.creationDate > b.creationDate) {
          return -1;
        } else {
          return 0;
        }
      });
    return array;
  }
}

