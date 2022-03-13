// Importaciones.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';




// Decorador.
@NgModule({
  declarations: 
  [
    SidebarComponent
  ],
  imports: 
  [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: 
  [
    SidebarComponent
  ]
})

// Clase.
export class SharedModule { }
