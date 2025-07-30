import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
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

  /*
  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })
    */
}
