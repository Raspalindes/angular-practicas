import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  public isOn: boolean = false;

  toggle(): void {
    this.isOn = !this.isOn;
  }
}


