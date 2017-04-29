import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import Tank from '../tank';
import Ship from '../ship';

@Injectable()
export class WarService {

  constructor(private http: Http) { }

  getTanks(): Observable<Tank[]> {
  	return this.http.get('https://api.worldoftanks.com/wot/encyclopedia/tanks/?application_id=demo').map(res => res.json().data);
  }

  getShips(): Observable<Ship[]> {
  	return this.http.get('https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=6cb2518983222e5e12dfa61c7d6aec97').map(res => res.json().data);
  }

}


