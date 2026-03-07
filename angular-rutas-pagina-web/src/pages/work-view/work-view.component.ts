import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-work-view',
  imports: [],
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css',
})
export class WorkViewComponent {
  // Para capturar el elemento de la ruta en el que estamos
  seo = input<string>();

  ngOnInit() {
    console.log('SEO lanzado', this.seo()); 
  }

}
