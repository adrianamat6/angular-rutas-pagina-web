import { Component } from '@angular/core';
import { input } from '@angular/core';
import { inject } from '@angular/core';
import { TrabajosService } from '../../app/services/trabajos.service';

@Component({
  selector: 'app-work-view',
  imports: [],
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css',
})
export class WorkViewComponent {
  // Para capturar el elemento de la ruta en el que estamos
  seo = input<string>();

  trabajosService = inject(TrabajosService);

  arrayTrabajos = this.trabajosService.getTrabajos();

  ngOnInit() {
    // Comprobar que this.seo existe
    let response = this.trabajosService.getTrabajoBySeo(this.seo());

    if (response) {
      console.log('Trabajo encontrado:', response);
    }else{
      console.log('No se encontró ningún trabajo con el SEO:', this.seo());
    }
  }

}
