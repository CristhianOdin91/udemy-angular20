import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name} ${this.age}`;
  }

  changeHero() {
    this.name.update(_ => 'Spiderman');
    this.age.update(_ => 22);
  }

  changeAge() {
    this.age.update(_ => 60);
  }

  capitalizeName() {
    return this.name.toString().toUpperCase();
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
