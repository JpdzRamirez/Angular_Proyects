import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponenteComponent } from './crud.componente/crud.componente.component';

const routes: Routes = [{
  path: '',
  component: CrudComponenteComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
