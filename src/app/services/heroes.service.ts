// Importaciones.
import { Injectable } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

// Decorador.
@Injectable({
  providedIn: 'root'
})

// Clase.
export class HeroesService 
{
  // Objeto de Heroes.
  heroes: Heroes[] = 
  [
    {
      id: 1,
      url: "https://i.pinimg.com/originals/36/60/58/366058cd421e6a981e50c6f800abbbd0.png",
      superheroe: "Batman",
      nombre: "Bruce Wayne",
      ubicacion: "Gotham City",
      descripcion: "Batman (conocido inicialmente como Bat-Man y en español como el Hombre Murciélago) es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,13​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.",
      poder: 4,
      editorial: "DC"
    },
    {
      id: 2,
      url: "https://speedforce.org/wp-content/uploads/2012/05/Flash130square-300x300.jpg",
      superheroe: "Flash",
      nombre: "Barry Allen",
      ubicacion: "Central City",
      descripcion: "Flash (conocido también como The Flash y traducido en español: Destello) es el nombre de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics. Creado por el escritor Gardner Fox y el artista Harry Lampert, el Flash original apareció por primera vez en Flash Comics #1 (fecha de portada de enero de 1940 / mes de noviembre de 1939). Apodado el Corredor Escarlata, todas las encarnaciones del Flash poseen súper velocidad, que incluye la capacidad de correr, moverse y pensar extremadamente rápido, también puede atravesar la materia sólida, usar reflejos sobrehumanos y aparentemente violar ciertas leyes de la física, como superar la velocidad de la luz.",
      poder: 8,
      editorial: "DC"
    },
    {
      id: 3,
      url: "http://geektoys.co/tienda/wp-content/uploads/2017/06/capitancuadro-300x300.png",
      superheroe: "Capitan America",
      nombre: "Steve Rogers",
      ubicacion: "Brooklyn",
      descripcion: "El Capitán América, cuyo nombre real es Steven Steve Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics.",
      poder: 5,
      editorial: "Marvel"
    }
  ]
}
