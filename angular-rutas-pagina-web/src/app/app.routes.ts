import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Error404Component } from '../pages/error404/error404.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { ProductosComponent } from '../pages/productos/productos.component';
import { NuestrosServiciosComponent } from '../pages/nuestros-servicios/nuestros-servicios.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent}, // para decir que es la ruta de entrada (el index.html)
    {path: 'home', component: HomeComponent},
    {path: 'nuestros-servicios', component: NuestrosServiciosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: Error404Component}

];
