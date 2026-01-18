import { Routes } from '@angular/router';
import { authGuard } from './guards/role.guard'; // si tu guard ya valida "logueado"
import { Pagina404 } from './pages/pagina404/pagina404';

export const routes: Routes = [
  // 1) Login público
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
  },

  // 2) Rutas protegidas (requieren auth)
  {
    path: 'inicio',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio),
  },
  {
    path: 'menu',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/menu/menu').then(m => m.Menu),
  },
  {
    path: 'pedir',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/pedir/pedir').then(m => m.Pedir),
  },
  {
    path: 'barra',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/barra/barra').then(m => m.Barra),
  },

  // 3) Root: decide dónde cae el usuario
  // Si quieres que SIEMPRE arranque en login:
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // 4) 404 real
  { path: '404', component: Pagina404 },
  { path: '**', redirectTo: '404' },
];
