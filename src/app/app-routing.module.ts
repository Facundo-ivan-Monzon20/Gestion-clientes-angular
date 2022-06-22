import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import {AltaClienteComponent} from '../app/clientes/alta-cliente/alta-cliente.component'
import {ListadoClientesComponent} from  '../app/clientes/listado-clientes/listado-clientes.component'

const routes: Routes = [{path: '', component: ListadoClientesComponent }
  ,{path: 'formulario', component: AltaClienteComponent},
{path: 'listado', redirectTo: '', component: ListadoClientesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
