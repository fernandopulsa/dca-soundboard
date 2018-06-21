import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(items: any, option: any): any {
    if (!option) return items;
    
    return items.filter(el => {
      const name = el.section;
      const regex = new RegExp(option, 'gi');
      
      return name.match(regex);
    });
  }

}
