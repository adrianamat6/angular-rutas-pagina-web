import { Injectable } from '@angular/core';
import { IContacto } from '../interfaces/icontacto';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CONTACTOS } from '../db/contactos.db';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ContactoService { 

  private contactos: IContacto[] = CONTACTOS;
  
  // Configuración de EmailJS
  private serviceID = 'service_ms7jdrl'; 
  private templateID = 'template_6dh8oak'; 
  private publicKey = 'QHJYroHv81suUDXsl';

  insertaContacto(contacto: IContacto): void {
    // 1. Guardar en el "array" local
    this.contactos.push(contacto);
    console.log('Lista de contactos actualizada:', this.contactos);

    // 2. Enviar email real usando EmailJS
    this.enviarEmailReal(contacto)
      .then((response: EmailJSResponseStatus) => {
        console.log('Email enviado con éxito:', response.status, response.text);
        
        // Feedback visual de ÉXITO
        Swal.fire({
          title: '¡Mensaje Enviado!',
          text: 'Tu consulta ha sido enviada correctamente.',
          icon: 'success',
          confirmButtonColor: '#0d6efd'
        });
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);

        // Feedback visual de ERROR
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonColor: '#dc3545'
        });
      });
  } // <--- Aquí cerraba mal antes

  private enviarEmailReal(datos: IContacto) {
    const parametros = {
      name: datos.nombre,     // coincide con {{name}} en tu plantilla de EmailJS
      email: datos.email,    // coincide con {{email}}
      message: datos.mensaje, // coincide con {{message}}
      reply_to: datos.email   
    };

    return emailjs.send(this.serviceID, this.templateID, parametros, this.publicKey);
  }
}