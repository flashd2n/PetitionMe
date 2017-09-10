import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBySignups'
})
export class OrderBySignupsPipe implements PipeTransform {

  transform(array: Array<string>, args: string, date, signups): Array<string> {

    if (!array || array === undefined || array.length === 0) {
      return null;
    }

      array.sort((a: any, b: any) => {
        if (a.signupUsers.length < b.signupUsers.length) {
          return 1;
        } else if (a.signupUsers.length > b.signupUsers.length) {
          return -1;
        } else {
          return 0;
        }
      });
    return array;
  }
}
