import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../objects/persona.class';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosURL="https://jsonplaceholder.typicode.com/users";

  private usuariosBd:Array<Persona>=[];

  constructor(private http:HttpClient) { }

  cargarUsuarios():Observable<any>{
    return this.http.get(this.usuariosURL);
  }
}
