import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CrudRoutingModule } from './crud-routing.module';

import { ListaFormularioModule } from './lista.formulario/lista-formulario.module';

import { CrudComponenteComponent } from '../crud/crud.componente/crud.componente.component';

//Providers
import { TraerDatosService } from '../../utils/services/traer-datos.service';
import { ModificarDatosService } from '../../utils/services/modificar-datos.service';

//Materiales
import {MaterialCdkModule} from '../../utils/material-cdk/material-cdk.module'


const declarables = [CrudComponenteComponent];

@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialCdkModule,
    ListaFormularioModule,
  ],
providers: [
  TraerDatosService,
  ModificarDatosService
],
exports: [declarables],
})
export class CrudModule { }
