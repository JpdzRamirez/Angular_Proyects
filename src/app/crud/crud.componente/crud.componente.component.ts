import { Component, OnInit } from '@angular/core';

import { Persona } from '../../objects/persona.class';
import { TraerDatosService } from 'src/app/servicios/traer-datos.service';
import { ModificarDatosService } from 'src/app/servicios/modificar-datos.service';


import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-components',
  templateUrl: './crud.componente.component.html',
  styleUrls: ['./crud.componente.component.scss']
})
export class CrudComponenteComponent implements OnInit  {

  formulario: FormGroup;

  private listaDatos:Array<Persona>=[];

  constructor(private servicioGet:TraerDatosService, private servicioPost:ModificarDatosService ){
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      genero: new FormControl(''),
      especie: new FormControl('')})
  }
  onSubmit(){
    console.log(this.formulario.value);
  }

  ngOnInit(){
    this.servicioGet.getUsers().subscribe(resp=>{
      this.setListaDatos(resp.results);
      console.log(resp.resuls);
      });

  }
  public getListaDatos():Array<Persona> {
    return this.listaDatos;
  }

  setListaDatos(lista:any){
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
  addDatosLista(persona:Persona):void {
    this.listaDatos.push(persona);
  }
  clear(){
    this.listaDatos.length = 0;
  }

}

/*
*/
