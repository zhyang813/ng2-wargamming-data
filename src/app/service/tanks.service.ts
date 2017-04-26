import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import Tank from '../tank';

@Injectable()
export class TanksService {

  constructor(private http: Http) { }

  getTanks(): Observable<Tank[]> {
  	return this.http.get('https://api.worldoftanks.com/wot/encyclopedia/tanks/?application_id=demo').map(res => res.json().data);
  }

}


