import { Pipe, PipeTransform } from '@angular/core';
import Ship from '../ship';

@Pipe({
	name: 'shipfilter',
	pure: false
})


//filter pipe for filtering data
export class ShipFilterPipe implements PipeTransform {
	transform(items: Ship[], filter: Ship): Ship[] {
		if (!items || !filter) {
			return items;
		}

    return items.filter((item: Ship) => this.applyFilter(item, filter));

	}
    
	applyFilter(ship: Ship, filter: Ship): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (ship[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (ship[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}