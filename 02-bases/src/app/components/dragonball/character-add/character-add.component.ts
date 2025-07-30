import { Component, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('')
  power = signal(0)

  addCharacter() {
    if (!this.name() || !this.power() || isNaN(this.power()) || this.power() <= 0) {
      return
    }

    /*
    this.characters.update(current => [
      ...current,
      {
        id: current.length + 1,
        name: this.name(),
        power: this.power()
      }
    ])
      */
    console.log({ name: this.name(), power: this.power() })
    this.resetFields()
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}
