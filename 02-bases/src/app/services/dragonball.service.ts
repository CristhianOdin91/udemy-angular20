import { Injectable, signal } from '@angular/core';
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
