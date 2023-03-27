import { Component, Input, EventEmitter, Output} from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

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

  private isButtonVisible:boolean=false;

  private personaje={nombre:'',genero:'',especie:''};

  public formulario:FormGroup;

  public setButtonVisible(state:boolean):void {
  this.isButtonVisible=state;
  }
  public getButtonVisible():boolean{
    return this.isButtonVisible;
  }
  public getNombre() {
    return this.formulario.controls['nombre'].value;
  }
  public getEspecie(){
    return this.formulario.controls['especie'].value;
  }
  public getGenero() {
    return this.formulario.controls['genero'].value;
  }
  constructor(public dialog: MatDialog ) {
    this.formulario=new FormGroup({
      nombre:new FormControl('',[Validators.required, Validators.minLength(5),],),
      genero:new FormControl('',[Validators.required, Validators.minLength(5),]),
      especie:new FormControl('',[Validators.required, Validators.minLength(5),])
    })
    //
  }
  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    /*dialogConfig.position = {
      'top': '50%',
      left: '',
    };*/
    dialogConfig.panelClass = "custom-dialog-container";
    dialogConfig.minWidth="50%"
    dialogConfig.data = {
      data:this.personaje,
    }


    const dialogRef = this.dialog.open(DialogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result?.nombre+'-'+result?.genero+'-'
      +result?.especie);
      this.formulario.setValue({
        nombre:result?.nombre,
        genero:result?.genero,
        especie:result?.especie
      });
      console.log(this.formulario.value);
      if(this.formulario.contains(result)) {
        this.setButtonVisible(true);
      }

    });

  }
  onSubmit(id:number):void {

    //console.log(this.listaFormulario[id-1].nombre);
    //this.newItemEvent.emit(this.formulario.value);
    //console.log(this.formulario.value);

    console.log('id:'+id);

    console.log(this.getNombre());

    this.listaFormulario[id-1].nombre=this.getNombre();
    this.listaFormulario[id-1].genero=this.getGenero();
    this.listaFormulario[id-1].especie=this.getEspecie();

  }
}



