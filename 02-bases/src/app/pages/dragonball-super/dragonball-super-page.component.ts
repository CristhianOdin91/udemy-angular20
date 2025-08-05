import { Component, inject } from '@angular/core';

import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
})
export class DragonballSuperPageComponent {
  // La inyección de dependencias se realiza en el constructor
  // esta sería la inyección tradicional
  // constructor(public dragonballService: DragonballService) {}

  // Esta es la nueva inyección de dependencias
  // sirve para tomar la instancia de la clase inclusive en funciones
  dragonballService = inject(DragonballService)
}
