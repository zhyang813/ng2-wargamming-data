import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WarService } from './service/wargamming.service';
import { TankFilterPipe } from './filter/tank-filter.pipe';
import { ShipFilterPipe } from './filter/ship-filter.pipe';
import { routing } from './app.routing';

import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { ShipsComponent } from './component/ships/ships.component';


@NgModule({
  declarations: [
    AppComponent,
    TankFilterPipe,
    ShipFilterPipe,
    HomeComponent,
    ShipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [WarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
