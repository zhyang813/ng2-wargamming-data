import { Component, Injectable, OnInit } from '@angular/core';
import { TanksService } from './service/tanks.service';
import Tank from './tank';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{
  
  tanks: Tank[];
  filter: Tank = new Tank();

  constructor(private tanksService: TanksService) {}

  ngOnInit() {
  	this.tanksService.getTanks().subscribe(
  		(tanks: Tank[]) => {
  			let array = [];
  			for ( let k in tanks) {
  				array.push(tanks[k]);
  			}
  			this.tanks = array;
  	});
  }

}
