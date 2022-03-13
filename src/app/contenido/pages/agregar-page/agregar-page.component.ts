// Importaciones.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Heroes } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';

// Decorador.
@Component({
  selector: 'app-agregar-page',
  templateUrl: './agregar-page.component.html'
})

// Clase.
export class AgregarPageComponent implements OnInit
{
  // NgModel.
  url = "";
  superheroe = "";
  nombre = "";
  ubicacion = "";
  descripcion = "";
  editorial = "";
  poder!: number;
  display: any;
  id!: number;
  longitud: number = 0;
  
  // Variables.
  heroes: Heroes[] = [];
  heroe: Heroes | undefined = {} as Heroes;

  // Constructor.
  constructor( 
    private HeroesService: HeroesService,
    private activeRoute: ActivatedRoute,
    private router: Router) 
  {
    this.heroes = this.HeroesService.heroes;
  }

  ngOnInit(): void {
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    if( this.id )
    {
      this.heroe = this.heroes.find( heroe => heroe.id === this.id );
      this.longitud = this.heroes.findIndex( heroe => heroe.id === this.id );

      this.cargarCampos();
    }
  }

  cargarCampos(): void
  {
    this.superheroe = this.heroe?.superheroe || '';
    this.nombre = this.heroe?.nombre || '';
    this.ubicacion = this.heroe?.ubicacion || '';
    this.url = this.heroe?.url || '';
    this.descripcion = this.heroe?.descripcion || '';
    this.editorial = this.heroe?.editorial || '';
    this.poder = this.heroe?.poder || 1 ;
  }

  guardar(): void // Guardar.
  {  
    // Validacion.
    if ((this.url == "") || (this.superheroe == "") || (this.nombre == "") || (this.ubicacion == "") || (this.descripcion == "") || (this.editorial == "") || (this.poder == undefined))
    {
      this.display = true
      return;
    }

    if (this.poder > 9) { this.poder = 9 }
    
    if (this.HeroesService.heroes.length == 0)
    {
      this.HeroesService.heroes.push(
      {
        id: 1,
        url: this.url,
        superheroe: this.superheroe,
        nombre: this.nombre,
        ubicacion: this.ubicacion,
        descripcion: this.descripcion,
        poder: this.poder,
        editorial: this.editorial
      });
    }
    else
    {
      this.HeroesService.heroes.push(
      {
        id: this.HeroesService.heroes[this.HeroesService.heroes.length - 1].id! + 1,
        url: this.url,
        superheroe: this.superheroe,
        nombre: this.nombre,
        ubicacion: this.ubicacion,
        descripcion: this.descripcion,
        poder: this.poder,
        editorial: this.editorial
      });
    }

    this.HeroesService.guardar();
    this.router.navigate(["listado"]);

  }

  modificar(): void // Modificar.
  {
    // Validacion.
    if ((this.url == "") || (this.superheroe == "") || (this.nombre == "") || (this.ubicacion == "") || (this.descripcion == "") || (this.editorial == "") || (this.poder == 0))
    {
      this.display = true
      return;
    }

    if (this.poder > 9) { this.poder = 9 }

    // Editar Objeto.
    this.HeroesService.heroes[this.longitud] = {
      id: this.id,      
      url: this.url,
      superheroe: this.superheroe,
      nombre: this.nombre,
      ubicacion: this.ubicacion,
      descripcion: this.descripcion,
      poder: this.poder,
      editorial: this.editorial
    };

    this.HeroesService.guardar();
    this.router.navigate(["listado"]);
  }
}
