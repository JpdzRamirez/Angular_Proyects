import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFormularioComponent } from '../lista.formulario/lista-formulario.component';
import { DialogComponent } from './dialog/dialog.component';

import { MaterialCdkModule } from '../../../utils/material-cdk/material-cdk.module';

const declarables=[ListaFormularioComponent,DialogComponent];
@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    MaterialCdkModule,
  ],
  exports: [declarables],
})
export class ListaFormularioModule { }
