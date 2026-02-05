import { Routes } from '@angular/router';
import { About } from './about/about'
import { TreeSelector } from './tree-selector/tree-selector';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./task-list/task-list').then(c => c.TaskList) },
    { path: 'tree', component: TreeSelector },
    { path: 'about', component: About }
];
