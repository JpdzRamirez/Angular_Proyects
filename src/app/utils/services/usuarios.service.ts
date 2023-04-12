import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../objects/persona.class';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private usuariosBd:Array<Persona>=[];

  constructor(private http:HttpClient) { }

  cargarUsuarios(){
    const url='';
    return this.http.get(url);
  }
}
