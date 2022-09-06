import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName',
  pure: false,
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let input = args[0];
    console.log(input)
    if(input.length<1){
      return value;
    }
    value = value.filter(el=> el.fullName.toLowerCase().startsWith(input.toLowerCase()) || el.email.toLowerCase().startsWith(input.toLowerCase));
    return value;
  }

}
