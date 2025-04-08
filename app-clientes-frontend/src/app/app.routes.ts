import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListadoComponent } from './paginas/listado/listado.component';

export const routes: Routes = [
    {path: "" , component: HomeComponent},
    {path: "formulario/crear" , component: FormularioComponent},
    {path: "formulario/editar/:id" , component: FormularioComponent},
    {path: "lista" , component: ListadoComponent}
];
