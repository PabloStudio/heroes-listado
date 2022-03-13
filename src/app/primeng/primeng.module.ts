// Importaciones.
import { NgModule } from '@angular/core';

// Importaciones de PrimeNG.
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';


// Decorador.
@NgModule({
  declarations: [],
  exports:
  [
    ButtonModule,
    InputTextModule,
    TableModule,
    InputTextareaModule,
    DialogModule,
    InputNumberModule
  ]
})

// Clase.
export class PrimengModule { }
