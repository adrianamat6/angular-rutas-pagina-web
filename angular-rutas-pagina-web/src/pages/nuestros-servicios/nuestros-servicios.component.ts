import { Component } from '@angular/core';
import { TrabajosService } from '../../app/services/trabajos.service';
import { inject } from '@angular/core'; 
import { IWork } from '../../app/interfaces/iwork';

@Component({
  selector: 'app-nuestros-servicios',
  imports: [],
  templateUrl: './nuestros-servicios.component.html',
  styleUrl: './nuestros-servicios.component.css',
})
export class NuestrosServiciosComponent {

  trabajosService = inject(TrabajosService);

  arrayTrabajos: IWork[] = this.trabajosService.getTrabajos();


}
