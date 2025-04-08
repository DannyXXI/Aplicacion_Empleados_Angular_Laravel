import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public tokencsrf: string;

  constructor(private http:HttpClient) {
    this.tokencsrf = "";
  }

  // peticion GET para obtener el token CSRF desde Laravel
  public getToken():Observable<any> {
    return this.http.get<any>("http://127.0.0.1:8000/token");
  }

  // metodo para guardar el token en la variable del servicio
  public guardarToken(token:string):void {
    this.tokencsrf = token;
  }

  // metodo para obtener el token almacenado(?)
  public obtenerToken():string {
    return this.tokencsrf;
  }
}
