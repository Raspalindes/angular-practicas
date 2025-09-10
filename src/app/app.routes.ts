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
      import('./pages/counter/counter.component').then(
        (m) => m.CounterComponent
      ),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./pages/toggle/toggle.component').then((m) => m.ToggleComponent),
  },
  {
    path: 'greeting',
    loadComponent: () =>
      import('./pages/greeting/greeting.component').then(
        (m) => m.GreetingComponent
      ),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./pages/todo/todo.component').then((m) => m.TodoComponent),
  },
  {
    path: 'formulario',
    loadComponent: () =>
      import('./pages/formulario/formulario.component').then((m) => m.FormularioComponent),
  },
];
