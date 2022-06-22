import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ClientesService} from './clientes/clientes.service'

import { ClientesModule } from './clientes/clientes.module';
import { NavComponent } from './nav/nav.component';

@NgModule({


  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
