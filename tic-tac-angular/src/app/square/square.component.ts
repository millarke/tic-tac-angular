import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      random number!
      <br>
      {{ rando }}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  rando;

  constructor() {
    setInterval(() => this.rando = Math.random(), 500);
  }

}
