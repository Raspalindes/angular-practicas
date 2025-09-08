import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./pages/counter/counter.component').then((m) => m.CounterComponent),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./pages/toggle/toggle.component').then((m) => m.ToggleComponent),
  },

  // Añade más rutas aquí si lo necesitas
];
