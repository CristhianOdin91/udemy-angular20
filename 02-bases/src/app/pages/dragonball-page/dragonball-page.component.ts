import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  name = signal('Gohan')
  power = signal(100) 

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
    {
      id: 3,
      name: 'Picollo',
      power: 3000
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500
    },
  ]);

  addCharacter() {
    this.characters.update(current => [
      ...current,
      {
        id: current.length + 1,
        name: this.name(),
        power: this.power()
      }
    ])
  }

  /*
  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })
    */
}
