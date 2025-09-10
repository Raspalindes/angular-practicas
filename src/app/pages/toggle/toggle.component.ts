import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  public isOn = false;

  public toggleLiterals = {
    on: 'Encendido',
    off: 'Apagado'
  }

  public toggle(): void {
    this.isOn = !this.isOn;
  }
}


