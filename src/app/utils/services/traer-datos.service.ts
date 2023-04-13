import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class apiDatosService  {

  private API_PERSONAJES="https://rickandmortyapi.com/api/character";

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.API_PERSONAJES);
  }

}
