import { Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';

export const routes: Routes = [
    {
        path: 'routew',
        loadComponent: ()=>RoutingComponent
    }
];
