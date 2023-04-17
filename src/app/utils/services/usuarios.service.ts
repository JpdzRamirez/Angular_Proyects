import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosURL="https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient) { }

  //GET FUNCTION✅
  cargarUsuarios():Observable<any>{
    return this.http.get(this.usuariosURL);//.pipe(retry(1), catchError(this.handleError));
  }
  //POST FUNCTION ♻

  editarUsuarios(user:any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);//.pipe(retry(1), catchError(this.handleError));
  }

  // handleError(error:any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //       return errorMessage;
  //   });
  // }
}
