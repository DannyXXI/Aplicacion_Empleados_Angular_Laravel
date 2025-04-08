import { Injectable } from '@angular/core';
import { AñadirCliente, Cliente } from '../modelos/Cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public listaClientes: Cliente[];  // array que contiene la lista de clientes

  public contadorID: number;  // variable para el contador

  // metodo constructor (acceso a peticiones HTTP)
  constructor(private http:HttpClient, private tokenServicios: TokenService) { 
    this.listaClientes = [];

    this.contadorID = 1;
  }

  // peticion GET al servidor Laravel
  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://127.0.0.1:8000/mostrar");
  }

  // peticion POST al servidor Laravel
  public postClientes(cliente:AñadirCliente): Observable<Cliente> {
    const headers = new HttpHeaders({"X-CSRF-TOKEN": this.tokenServicios.tokencsrf});  // crear un encabezado (de momento no funciona por el middleware)
    return this.http.post<Cliente>("http://127.0.0.1:8000/crear", cliente, {headers});
  }

  // peticion PUT al servidor Laravel
  public putClientes(nuevoCliente:AñadirCliente, id:number): Observable<Cliente> {
    return this.http.put<Cliente>("http://127.0.0.1:8000/editar/"+id , nuevoCliente);
  }

  // peticion DELETE al servidor Laravel
  public deleteClientes(id:number): Observable<Cliente> {
    return this.http.delete<Cliente>("http://127.0.0.1:8000/eliminar/"+id);
  }
  
}
