import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {
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
  ]);
}
