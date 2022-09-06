import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSujet',
  pure: false,
})
export class SearchSujetPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let input = args[0];
    console.log(input)
    if(input.length<1){
      return value;
    }
    let result = value.filter(el=> el.title.toLowerCase().startsWith(input.toLowerCase()));
    return result;
  }

}
