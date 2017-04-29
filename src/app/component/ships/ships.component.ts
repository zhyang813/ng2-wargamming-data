import { Component, OnInit } from '@angular/core';
import { WarService } from '../../service/wargamming.service';

import Ship from '../../ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships: Ship[];
  filter: Ship = new Ship();

  constructor(private warService: WarService) {}

  ngOnInit() {
  	this.warService.getShips().subscribe(
  		(ship: Ship[]) => {
  			let array = [];
  			for ( let k in ship) {
  				array.push(ship[k]);
  			}
  			this.ships = array;
  			// console.log(array);
  	});
  }

}
