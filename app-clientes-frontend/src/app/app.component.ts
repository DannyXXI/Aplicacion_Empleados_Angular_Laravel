import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // metodo constructor (añadimos el sercicio de cliente)
  constructor(public servicioToken:TokenService) {}
  
  ngOnInit():void{
    this.servicioToken.getToken().subscribe({
      next: (data) => {this.servicioToken.guardarToken(data.csrfToken);
        console.log(this.servicioToken.tokencsrf)
      },
      error: (e) => {console.error(e);}
    });
  }
}
