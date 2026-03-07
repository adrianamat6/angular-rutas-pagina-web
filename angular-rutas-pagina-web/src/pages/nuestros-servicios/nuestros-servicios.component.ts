import { Component } from '@angular/core';
import { TrabajosService } from '../../app/services/trabajos.service';
import { inject } from '@angular/core'; 
import { IWork } from '../../app/interfaces/iwork';
import { WorkCardComponent } from '../../app/components/work-card/work-card.component';

@Component({
  selector: 'app-nuestros-servicios',
  imports: [WorkCardComponent],
  templateUrl: './nuestros-servicios.component.html',
  styleUrl: './nuestros-servicios.component.css',
})
export class NuestrosServiciosComponent {

  trabajosService = inject(TrabajosService);

  arrayTrabajos: IWork[] = this.trabajosService.getTrabajos();


}
