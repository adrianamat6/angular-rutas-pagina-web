import { Component } from '@angular/core';
import { input } from '@angular/core';
import { IWork } from '../../interfaces/iwork';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-card',
  imports: [RouterLink],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css',
})
export class WorkCardComponent {
  miTrabajo = input<IWork>();
  
  

}
