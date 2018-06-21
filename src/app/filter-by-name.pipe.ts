import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any, text?: any): any {
    // console.log(items, text);
    
    if (!text) return items;
    
    return items.filter(el => {
      const name = el.name;
      const regex = new RegExp(text, 'gi');
      
      return name.match(regex);
    });
    
  }

}
