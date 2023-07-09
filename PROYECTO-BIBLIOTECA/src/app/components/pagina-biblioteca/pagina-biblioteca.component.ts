import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-biblioteca',
  templateUrl: './pagina-biblioteca.component.html',
  styleUrls: ['./pagina-biblioteca.component.css']
})
export class PaginaBibliotecaComponent {
 constructor(){}

  cerrarsesion(): void {
    localStorage.removeItem('token_biblio');
    // Aquí puedes realizar otras tareas relacionadas con cerrar la sesión, como redirigir al usuario a la página de inicio de sesión, limpiar datos en caché, etc.
  }



}
