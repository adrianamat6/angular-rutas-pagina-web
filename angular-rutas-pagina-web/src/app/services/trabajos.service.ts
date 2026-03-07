import { Injectable } from '@angular/core';
import { TRABAJOS } from '../db/nuestrosservicios.db';
import { IWork } from '../interfaces/iwork';

@Injectable({
  providedIn: 'root',
})
export class TrabajosService {
  private trabajos: IWork[] = TRABAJOS;

  getTrabajos() {
    return this.trabajos;
  }; 

  // Método para obtener un trabajo por su SEO o url amigable
  getTrabajoBySeo(seo: string | undefined): IWork | undefined {
    return this.trabajos.find(trabajo => trabajo.seo === seo); 
  };


}
