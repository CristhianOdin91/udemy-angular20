import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
 templateUrl: './counter-page.component.html',
 styles: `
  button {
    padding: 5px;
    margin: 5px;
    width: 200px;
  }
 `,
 // La siguiente línea es para desactivar ZoneJS (Hace más rápido el componente)
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10)

  constructor() {
    setInterval(() => {
      // Las propiedades del componente no se actualizan si ZoneJS está desactivado
      // this.counter += 1;

      // Las señales si se actualizan aún con ZoneJS desactivado
      // this.counterSignal.update(v => v + 1);

      // this.increaseBy(1);

      console.log('Tick');
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
