import { Component } from '@angular/core';
import { input } from '@angular/core';
import { IProducto } from '../../interfaces/iproducto';
import { computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  miProducto = input<IProducto>();

}
