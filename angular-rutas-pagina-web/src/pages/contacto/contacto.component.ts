import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; // Importación de la librería
import { inject } from '@angular/core';
import { IContacto } from '../../app/interfaces/icontacto';
import { ContactoService } from '../../app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {

  contactoService = inject(ContactoService); // Inyección del servicio



  contactForm: FormGroup; 

  constructor() {
    this.contactForm = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      mensaje: new FormControl('',[Validators.required, Validators.minLength(10)]),
    }); 
  }; 



enviarMensaje() {
  if (this.contactForm.valid) {
    // Extraemos los datos para personalizar el mensaje si quieres
    const nombreUsuario = this.contactForm.value.nombre;

    Swal.fire({
      title: '¡Enviado!',
      text: `Gracias ${nombreUsuario}, hemos recibido tu mensaje correctamente.`,
      icon: 'success',
      confirmButtonText: 'Genial',
      confirmButtonColor: '#0d6efd', // Color azul de tu proyecto
      showClass: {
        popup: 'animate__animated animate__fadeInUp' // Si usas Animate.css
      }
    });

    console.log('mensaje que llega:', this.contactForm.value);
    this.contactoService.insertaContacto(this.contactForm.value);
    this.contactForm.reset(); 
  } else {
    // Opcional: Alerta de error si intentan forzar el envío
    Swal.fire({
      title: 'Error',
      text: 'Por favor, revisa los campos del formulario.',
      icon: 'error',
      confirmButtonColor: '#dc3545'
    });
  }
}

}


