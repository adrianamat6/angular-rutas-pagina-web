import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from '../../app/interfaces/iproducto';
import { ProductosService } from '../../app/services/productos.service';
import { inject} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-product',
  imports: [RouterLink],
  templateUrl: './info-product.component.html',
  styleUrl: './info-product.component.css',
})
export class InfoProductComponent {
  // Para capturar el parámetro dinámico de la ruta
  id = input<string>();


  // Inyectamos el servicio para obtener los productos
  productosService = inject(ProductosService);
  router = inject(Router);

  // Obtenemos el producto específico basado en el ID de la ruta
  producto: IProducto | undefined;

  ngOnInit() {
    const idNumber = Number(this.id()); // Convertimos el ID a número
    this.producto = this.productosService.getProductoById(idNumber);

    if (!this.producto) {
      this.router.navigate(['/error404']); // Redirige a la página de error si el producto no se encuentra
    }
  }


}