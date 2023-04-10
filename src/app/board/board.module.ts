import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';

import { AgregarComponent } from './crud/agregar/agregar.component';

import { ListaFormularioModule } from './crud/lista.formulario/lista-formulario.module';


const imported=[CommonModule,BoardRoutingModule,ListaFormularioModule];
const declared=[AgregarComponent];
const exported=[AgregarComponent];

@NgModule({
  declarations: [
    declared,
  ],
  imports: [
    imported,
  ],
  exports:[
    exported
  ],

})
export class BoardModule { }
