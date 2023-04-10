import { Component, Input, EventEmitter, Output, OnInit} from '@angular/core';

//FORMULARIOS
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

// DIALOG FORMULARIO
import { DialogComponent } from './dialog/dialog.component';

//OBJETO BASE MOLDE
import { Persona } from '../../../utils/objects/persona.class';

//SERVICIOS IMPORTAR DATOS DEL API
import { TraerDatosService } from '../../../utils/services/traer-datos.service';
import { ModificarDatosService } from '../../../utils/services/modificar-datos.service';


@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.scss']
})
export class ListaFormularioComponent implements OnInit {

  // BINDINGS
  //@Input() listaFormulario: any={};
  @Output() newItemEvent = new EventEmitter<string>();


  // VARIABLES
  private listaDatos:Array<Persona>=[];

  private isButtonVisible:boolean=false;

  private personaje={nombre:'',genero:'',especie:''};

  public formulario:FormGroup;

  // CONSTRUCTOR
  constructor(public dialog: MatDialog,private servicioGet:TraerDatosService,private servicioPOST:ModificarDatosService ) {
    this.formulario=new FormGroup({
      nombre:new FormControl('',[Validators.required, Validators.minLength(5),],),
      genero:new FormControl('',[Validators.required, Validators.minLength(5),]),
      especie:new FormControl('',[Validators.required, Validators.minLength(5),])
    })
    //
  }
  // setting data from api in list
  ngOnInit(){
    this.servicioGet.getUsers().subscribe(resp=>{
      this.setListaDatos(resp.results);
      });

    }


  // SETTERS
  public setButtonVisible(state:boolean):void {
    this.isButtonVisible=state;
  }

  setListaDatos(lista:any){
    console.log(lista);
    for(var i=0; i<lista.length; i++){
      let personaTemp:Persona =new Persona();
      personaTemp.setId(lista[i].id);
      personaTemp.setNombre(lista[i].name);
      personaTemp.setImage(lista[i].image);
      personaTemp.setGenero(lista[i].gender);
      personaTemp.setEspecie(lista[i].species);
      this.listaDatos.push(personaTemp);
    }
  }

  editItem(nuevoItem:string):void {

  }
  clear(){
    this.listaDatos.length = 0;
  }

  //GETTERS FROM FORM CONTROL
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

  public getListaDatos():Array<Persona> {
    return this.listaDatos;
  }

  // DIALOG
  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

          //CONFIG DIALOG
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

    // LLAMADO AL DIALOGO
    const dialogRef = this.dialog.open(DialogComponent,dialogConfig);

    // CLOSE DIALOG
    dialogRef.afterClosed().subscribe(result => {
      /*
          TESTING
      console.log('The dialog was closed' + result?.nombre+'-'+result?.genero+'-'
      +result?.especie);*/
      //Seteamos el formulario de validación
          this.formulario.setValue({
            nombre:result?.nombre,
            genero:result?.genero,
            especie:result?.especie
          });
        // TESTING
      console.log(this.formulario.value);
          // ENABLE SUBMINT BUTTON
          if(this.formulario.contains(result)) {
            this.setButtonVisible(true);
          }

    });

  }

  // ENVIAR INFORMACIóN AL BACKEND
  onSubmit(id:any):void {

    //console.log(this.listaFormulario[id-1].nombre);
    //this.newItemEvent.emit(this.formulario.value);
    //console.log(this.formulario.value);
        console.log('id:'+id);

        console.log(this.getNombre());

        this.listaDatos[id-1].setNombre(this.getNombre());
        this.listaDatos[id-1].setEspecie(this.getEspecie());
        this.listaDatos[id-1].setGenero(this.getGenero());
  }
}



