import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter: number = 0;

  increaseCounter() {
    this.counter++;
  }
  decreaseCounter() {
    this.counter--;
  }
}
