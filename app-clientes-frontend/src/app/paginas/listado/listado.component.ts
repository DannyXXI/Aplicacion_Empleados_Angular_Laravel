import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-listado',
  imports: [RouterLink],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{

  // metodo constructor (añadimos el sercicio de cliente)
  constructor(public servicioCliente:ClienteService) {}

  ngOnInit():void{
    this.servicioCliente.getClientes().subscribe({
      next: (data) => {this.servicioCliente.listaClientes = data;},
      error: (e) => {console.error(e);}
    });
  }

  public borrarCliente(id:number):void{
    if(confirm("¿Quieres eliminar el cliente con ID " + id + "?")){
      this.servicioCliente.deleteClientes(id).subscribe({
        next: () => {
          alert("Cliente eliminado satisfactoriamente.");
          this.servicioCliente.getClientes().subscribe({
            next: (data) => {this.servicioCliente.listaClientes = data;},
            error: (e) => {console.error(e);}
          });
        },
        error: (e) => {console.error(e);}
      });
    }
  }
}
