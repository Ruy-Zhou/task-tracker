import { Routes } from '@angular/router';
import { About } from './about/about'

export const routes: Routes = [
    { path: '', loadComponent: () => import('./task-list/task-list').then(c => c.TaskList) },
    { path: 'about', component: About }
];
