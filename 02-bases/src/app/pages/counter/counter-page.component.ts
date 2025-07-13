import { Component } from "@angular/core";

@Component({
 templateUrl: './counter-page.component.html',
 styles: `
  button {
    padding: 5px;
    margin: 5px;
    width: 200px;
  }
 `
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
