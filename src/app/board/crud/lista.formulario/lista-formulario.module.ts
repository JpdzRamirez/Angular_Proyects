import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFormularioComponent } from '../lista.formulario/lista-formulario.component';
import { DialogComponent } from './dialog/dialog.component';

import { MaterialCdkModule } from '../../../utils/material-cdk/material-cdk.module';

const declared=[ListaFormularioComponent,DialogComponent];

const exported=[ListaFormularioComponent,DialogComponent];

const imported=[CommonModule,MaterialCdkModule,];


@NgModule({
  declarations: [
    declared
  ],
  imports: [
    imported
  ],
  exports: [
    exported
  ],
})
export class ListaFormularioModule { }
