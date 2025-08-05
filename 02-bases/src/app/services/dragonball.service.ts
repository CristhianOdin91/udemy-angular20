import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Con la propiedad 'providedIn' se define el scope
// si se deja como 'root' estará disponible en toda la aplicación
@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9999
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000
    },
  ]);

  // Los efectos nos van a servir para disparar una acción secundaria
  // un efecto se podría definir dentro del constructor
  // pero lo más recomendable es hacerlo en una propiedad
  // Los efectos NO se usan para hacer peticiones http
  // Como buena práctica los efectos sólo deben tener una tarea
  saveToLocalStorage = effect(() => {
    // Al usar una señal (signal) el efecto se vuelve a ejecutar 
    // cada que la señal cambia
    console.log(`Character count ${this.characters().length}`)

    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(newCharacter: Character) {
    this.characters.update(current => [
      ...current,
      {
        ...newCharacter
      }
    ])
  }
}

// DI - Dependency Injection
// Debido a esto los servicios se trabajan como si fueran Singleton
// Sólo se instancia una vez
// Los datos de un servicio no se destruyen al cambiar de pantallas
