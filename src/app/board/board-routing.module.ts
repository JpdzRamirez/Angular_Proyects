import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './crud/agregar/agregar.component';

import { ListaFormularioComponent } from './crud/lista.formulario/lista-formulario.component';
import { BoardComponent } from './board/board.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component:BoardComponent,
  children:[
    {path: 'lista', component: ListaFormularioComponent},
    {path: 'agregar', component: AgregarComponent},
    {path: 'menu', component: MainComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
