// Importaciones.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Heroes } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';

// Decorador.
@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html'
})

// Clase.
export class ListadoPageComponent 
{

  // Variables.
  heroes: Heroes[] = [];
  descripcionHeroe: string = "";
  valorRating: any = 1;
  display: boolean = false;
  desactivado: boolean = false;

  // Constructor.
  constructor( private HeroesService: HeroesService,
               private router: Router) 
  {
    if (window.localStorage.getItem("heroes") !== null)
    {
      this.HeroesService.cargar();
    }
    this.heroes = this.HeroesService.heroes;  
  }

  // Metodos.
  borrarHeroe(id: number): void
  {
    this.heroes.splice(id, 1);
    this.HeroesService.guardar();
  }

  showDialog(): void
  {
    this.display = true;
  }

  valorDescripcion(id: number): void
  {
    this.descripcionHeroe = this.heroes[id].descripcion;
    this.showDialog();
  }

  editar(id: number) {
    this.router.navigate(["agregar", { id } ] );
  }
}
