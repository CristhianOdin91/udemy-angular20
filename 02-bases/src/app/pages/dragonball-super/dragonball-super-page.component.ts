import { Component, signal } from '@angular/core';

import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

import type { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
})
export class DragonballSuperPageComponent {
  name = signal('')
  power = signal(0) 

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

  addCharacter() {
    if (!this.name() || !this.power() || isNaN(this.power()) || this.power() <= 0) {
      return
    }

    this.characters.update(current => [
      ...current,
      {
        id: current.length + 1,
        name: this.name(),
        power: this.power()
      }
    ])
    this.resetFields()
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
