import { Component } from '@angular/core';
import { input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { computed } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  miProducto = input<IProducto>();

}
