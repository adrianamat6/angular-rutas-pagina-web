import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: IProducto[] = PRODUCTOS;
  
  getProductos() {
    return this.productos;
  }

  getProductoById(id: number): IProducto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
  
} 
