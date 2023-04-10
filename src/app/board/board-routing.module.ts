import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './crud/agregar/agregar.component';

import { ListaFormularioComponent } from './crud/lista.formulario/lista-formulario.component';

const routes: Routes = [{
  path: '',
  children:[
    {path: 'lista', component: ListaFormularioComponent},
    {path: 'board', component: AgregarComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
