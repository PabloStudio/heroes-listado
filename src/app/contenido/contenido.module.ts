// Importaciones.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgregarPageComponent } from './pages/agregar-page/agregar-page.component';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListadoPageComponent } from './pages/listado-page/listado-page.component';
import { PrimengModule } from '../primeng/primeng.module';

// Decorador.
@NgModule({
  declarations: 
  [
    AgregarPageComponent,
    BuscarPageComponent,
    HomePageComponent,
    ListadoPageComponent
  ],
  imports: 
  [
    CommonModule,
    FormsModule,
    RouterModule,
    PrimengModule
  ],
  exports:
  [
    AgregarPageComponent,
    BuscarPageComponent,
    HomePageComponent,
    ListadoPageComponent
  ]
})

// Clase.
export class ContenidoModule { }
