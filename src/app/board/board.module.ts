import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { AgregarComponent } from './crud/agregar/agregar.component';

import { ListaFormularioModule } from './crud/lista.formulario/lista-formulario.module';
import { BoardComponent } from './board/board.component';
import { apiDatosService } from '../utils/services/traer-datos.service';
import { MaterialCdkModule } from '../utils/material-cdk/material-cdk.module';
import { SharedModule } from '../shared/shared.module';


const imported=[CommonModule,BoardRoutingModule,ListaFormularioModule, MaterialCdkModule, SharedModule];
const declared=[BoardComponent,AgregarComponent];
const exported=[AgregarComponent];
const provided=[apiDatosService]

@NgModule({
  declarations: [
    declared,
  ],
  imports: [
    imported,
  ],
  exports:[
    exported,
  ],
  providers:[
    provided,
  ]
})
export class BoardModule { }
