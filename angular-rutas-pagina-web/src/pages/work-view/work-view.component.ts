import { Component } from '@angular/core';
import { input } from '@angular/core';
import { inject } from '@angular/core';
import { TrabajosService } from '../../app/services/trabajos.service';
import { Router } from '@angular/router';
import { IWork } from '../../app/interfaces/iwork';

@Component({
  selector: 'app-work-view',
  imports: [],
  templateUrl: './work-view.component.html',
  styleUrl: './work-view.component.css',
})
export class WorkViewComponent {
  // Para capturar el elemento de la ruta en el que estamos
  seo = input<string>();

  // Definimos una propiedad para almacenar la respuesta del servicio, que será un trabajo específico basado en el SEO de la ruta
  response!: IWork | undefined;

  // Inyectamos el servicio de trabajos para poder acceder a los metodos del servicio
  trabajosService = inject(TrabajosService);

  arrayTrabajos = this.trabajosService.getTrabajos();

  // Para hacer redirecciones en angular inyectamos el router
  router = inject(Router);



  ngOnInit() {
    // Comprobar que this.seo existe
    this.response = this.trabajosService.getTrabajoBySeo(this.seo());
    console.log(this.response);
    if (!this.response) {
      this.router.navigate(['/error404']); // Redirige a la página de servicios si no se encuentra el trabajo
    }
  }

}
