import { Component, Input, EventEmitter, Output,Inject } from '@angular/core';

import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

export interface personaje {
  nombre:string;
  especie:string;
  genero:string;
}
@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.scss']
})
export class ListaFormularioComponent {

  @Input() listaFormulario: any={};
  @Output() newItemEvent = new EventEmitter<string>();

  private personaje={nombre:'',genero:'',especie:''};

  formulario:FormGroup;

  constructor(public dialog: MatDialog ) {
    this.formulario=new FormGroup({
      nombre:new FormControl(''),
      genero:new FormControl(''),
      especie:new FormControl('')
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {data: this.personaje, height:'350px', width:'250px',autoFocus:true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result?.nombre+'-'+result?.genero+'-'
      +result?.especie+'-'+result?.genero);
    });
  }
  onSubmit(id:string):void {
    this.formulario.controls['id'].setValue(id);
    this.newItemEvent.emit(this.formulario.value);
  }
}



