import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.scss']
})
export class ListaFormularioComponent {

  @Input() listaFormulario: any={};

  constructor() {
  }

}
