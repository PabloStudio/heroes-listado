// Importaciones.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './contenido/pages/home-page/home-page.component';
import { ListadoPageComponent } from './contenido/pages/listado-page/listado-page.component';
import { AgregarPageComponent } from './contenido/pages/agregar-page/agregar-page.component';
import { BuscarPageComponent } from './contenido/pages/buscar-page/buscar-page.component';

// Rutas.
const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: "listado",
    component: ListadoPageComponent
  },
  {
    path: "agregar",
    component: AgregarPageComponent
  },
  {
    path: "buscar",
    component: BuscarPageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// Decorador.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Clase.
export class AppRoutingModule { }
