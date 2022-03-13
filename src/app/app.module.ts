// Importaciones.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoModule } from './contenido/contenido.module';
import { SharedModule } from './shared/shared.module';

// Decorador.
@NgModule({
  declarations: 
  [
    AppComponent
  ],
  imports: 
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Clase.
export class AppModule { }
