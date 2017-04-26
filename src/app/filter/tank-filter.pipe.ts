import { Pipe, PipeTransform } from '@angular/core';
import Tank from '../tank';

@Pipe({
	name: 'tankfilter',
	pure: false
})

export class TankFilterPipe implements PipeTransform {
	transform(items: Tank[], filter: Tank): Tank[] {
		if (!items || !filter) {
			return items;
		}

    return items.filter((item: Tank) => this.applyFilter(item, filter));

	}

	 applyFilter(tank: Tank, filter: Tank): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
        	// console.log(tank[field], filter[field]);
          if (tank[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (tank[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}