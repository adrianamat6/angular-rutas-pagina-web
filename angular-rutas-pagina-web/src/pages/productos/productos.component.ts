import { Component } from '@angular/core';
import { ProductosService } from '../../app/services/productos.service';
import { IProducto } from '../../app/interfaces/iproducto';
import { inject } from '@angular/core';
import { ProductCardComponent } from '../../app/components/product-card/product-card.component';


@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  productosService = inject(ProductosService);

  arrayProductos: IProducto[] = this.productosService.getProductos();
  
}
