import { Component, OnInit } from '@angular/core';

import { Persona } from '../../objects/persona.class';
import { TraerDatosService } from 'src/app/servicios/traer-datos.service';
import { ModificarDatosService } from 'src/app/servicios/modificar-datos.service';


@Component({
  selector: 'app-crud-components',
  templateUrl: './crud.componente.component.html',
  styleUrls: ['./crud.componente.component.scss']
})
export class CrudComponenteComponent implements OnInit  {

  private listaDatos:Array<Persona>=[];

  constructor(private servicioGet:TraerDatosService,private servicioPOST:ModificarDatosService){
  }


  ngOnInit(){
    this.servicioGet.getUsers().subscribe(resp=>{
      this.setListaDatos(resp.results);
      });

  }
  public getListaDatos():Array<Persona> {
    return this.listaDatos;
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
    console.log(nuevoItem);
    //this.listaDatos.push(persona);
  }
  clear(){
    this.listaDatos.length = 0;
  }

}

/*
*/
