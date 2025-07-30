import { Component, input } from '@angular/core';

import type { Character } from '../../../interfaces/character.interface'

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // Con input se define que el valor de la propiedad
  // viene del mundo exterior
  characters = input.required<Character[]>();
}
