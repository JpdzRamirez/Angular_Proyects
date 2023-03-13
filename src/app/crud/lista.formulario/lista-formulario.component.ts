import { Component, Input, EventEmitter, Output,Inject } from '@angular/core';

import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.scss']
})
export class ListaFormularioComponent {

  @Input() listaFormulario: any={};
  @Output() newItemEvent = new EventEmitter<string>();

  formulario: FormGroup;

  public id:string ='';
  public nombre:string='';
  public genero:string='';
  public especie:string='';


  constructor(public dialog: MatDialog ) {
    this.formulario = new FormGroup({
      id:new FormControl(''),
      nombre: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      especie: new FormControl('',Validators.required),
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {nombre: this.nombre, genero: this.genero, especie:this.especie},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onSubmit(id:string):void {
    this.formulario.controls['id'].setValue(id);
    this.newItemEvent.emit(this.formulario.value);
  }
}



