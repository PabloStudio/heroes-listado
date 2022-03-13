// Importaciones.
import { Component } from '@angular/core';

import { Heroes } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';

// Decorador.
@Component({
  selector: 'app-buscar-page',
  templateUrl: './buscar-page.component.html'
})

// Clase.
export class BuscarPageComponent
{
  // Variables.
  heroes: Heroes[] = [];
  termino: string = "";
  terminoValor: string = "";
  mostrarHeroe!: boolean;
  heroeSeleccionado: Heroes = {} as Heroes;

  // Constructor.
  constructor( private heroesService : HeroesService ) 
  {
    this.heroes = this.heroesService.heroes;
  }

  // Metodos.
  buscarHeroe(): void
  {
    this.terminoValor = this.termino;

    for(let number = 0; number < this.heroes.length; number++)
    {
      if (this.termino == this.heroes[number].superheroe) 
      {
        this.mostrarHeroe = true;

        this.heroeSeleccionado = this.heroes[number];

        return;
      }
      else
      {
        this.mostrarHeroe = false;
      }
    }
  }

}
