import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service'
import { AñadirCliente } from '../../modelos/Cliente';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-formulario',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public formulario:FormGroup;  // variable que se le asigna al formulario

  // variables para los campos del formulario
  public nombre:FormControl;
  public cif:FormControl;
  public direccion:FormControl;
  public grupo:FormControl;

  public IDparametro: number;  // variable para capturar el parametro (ID del cliente a editar)

  public interfazCliente:AñadirCliente;

  // metodo constructor (añadimos el sercicio de cliente y el manejo de rutas)
  constructor(public servicioCliente:ClienteService, private route:ActivatedRoute, private router:Router, public servicioToken:TokenService) {
    this.nombre = new FormControl("");
    this.cif = new FormControl("");
    this.direccion = new FormControl("");
    this.grupo = new FormControl("");

    this.formulario = new FormGroup({ nombre:this.nombre , cif:this.cif , direccion:this.direccion , grupo:this.grupo });

    this.IDparametro = (route.snapshot.params["id"] == undefined) ? 0 : route.snapshot.params["id"];

    this.interfazCliente = { nombre:"" , cif:"" , direccion:"" , grupo:"" };
  }

  // metodo ngOnInit que ejecutaremos para mostrar los datos del cliente cuando se cargue el formulario de editar
  ngOnInit():void{
    if (this.IDparametro != 0){
      let clienteEditar = this.servicioCliente.listaClientes.find(cliente => cliente.id == this.IDparametro); // obtenemos el cliente a editar
      if (clienteEditar != undefined) {
        this.formulario.setValue({nombre: clienteEditar.nombre, cif: clienteEditar.cif, direccion: clienteEditar.direccion, grupo: clienteEditar.grupo});  // mostramos los datos en el formulario
      }
      else{
        this.router.navigate(["/"]);  // si aparece definida como undefined se vuelve a la raiz
      }
    }
  }

  // metodo para enviar los datos del formulario
  public enviarFormulario(event: Event):void{
    // si no estan rellenados los campos no se envia el formulario y salta un mensaje de aviso
    if(this.nombre.value.trim() == "" || this.cif.value.trim() == ""  || this.direccion.value.trim() == "" || this.grupo.value.trim() == ""){
      alert("Rellene todos los campos para enviar el formulario.");
      event.preventDefault();
      
    }
    else{
      // si no existe un parametro id (vale 0) se añade el cliente, sino se edita
      if (this.IDparametro == 0){
        this.interfazCliente = { nombre:this.nombre.value.trim() , cif:this.cif.value.trim() , direccion:this.direccion.value.trim() , grupo:this.grupo.value.trim()};

        this.servicioCliente.postClientes(this.interfazCliente).subscribe({
          next: (data) => { 
            alert("Cliente creado con el ID " + data.id + ".");
            this.formulario.setValue({nombre: "", cif: "", direccion: "", grupo: ""}); // reiniciamos los valores del formulario
          },
          error: (e) => { console.error(e);}
        });
      }
      else{
        this.interfazCliente = { nombre:this.nombre.value.trim() , cif:this.cif.value.trim() , direccion:this.direccion.value.trim() , grupo:this.grupo.value.trim()};

        this.servicioCliente.putClientes(this.interfazCliente, this.IDparametro).subscribe({
          next: () => { 
            alert("Cliente modificado correctamnte.");
            this.formulario.setValue({nombre: "", cif: "", direccion: "", grupo: ""}); // reiniciamos los valores del formulario
            this.router.navigate(["/lista"]);  // cuando se termina de editar vuelve a la lista
          },
          error: (e) => { console.error(e);}
        }); 
      }
    }
  }
}
