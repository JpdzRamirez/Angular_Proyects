import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CrudRoutingModule } from './crud-routing.module';
import { ListaFormularioComponent } from './lista.formulario/lista-formulario.component';
import { CrudComponenteComponent } from '../crud/crud.componente/crud.componente.component';


import { TraerDatosService } from 'src/app/servicios/traer-datos.service';
import { ModificarDatosService } from 'src/app/servicios/modificar-datos.service';

import {MaterialCdkModule} from '../material-cdk/material-cdk.module'

const declarables = [ ListaFormularioComponent, CrudComponenteComponent ];
@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialCdkModule,
  ],
 providers: [
  TraerDatosService,
  ModificarDatosService
 ],
})
export class CrudModule { }
