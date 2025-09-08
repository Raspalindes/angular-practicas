import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  route: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menuOptions: MenuOption[] = [
    { route: '/counter', label: 'Contador' },
    { route: '/toggle', label: 'Interruptor' },
    // Aqui se añaden mas rutas
  ];
}