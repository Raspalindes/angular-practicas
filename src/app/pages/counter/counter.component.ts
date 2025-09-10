import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter: number = 0;

  public increaseCounter(): void {
    this.counter++;
  }
  public decreaseCounter(): void {
    this.counter--;
  }
}
