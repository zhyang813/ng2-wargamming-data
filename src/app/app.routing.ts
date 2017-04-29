import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ShipsComponent } from './component/ships/ships.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ships', component: ShipsComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);