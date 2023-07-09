import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modulos/libros/libro';
import { ServicioLibroService } from 'src/app/services/servicio-libros/servicio-libro.service';

@Component({
  selector: 'app-consultar-repertorio',
  templateUrl: './consultar-repertorio.component.html',
  styleUrls: ['./consultar-repertorio.component.css']
})
export class ConsultarRepertorioComponent implements OnInit {
titulo = '';
libros:Libro[];


  constructor(private servicioLibros: ServicioLibroService){}
  
  ngOnInit(): void {
    this.getLibros();
  }

getLibros(){
  this.servicioLibros.getLibros().subscribe(
    res=>{
      this.libros = res;
    }
  )
}

async buscar() {
  try {
    const respuesta = await this.servicioLibros.getlibrosTitulo(this.titulo).toPromise();
    this.libros = respuesta as Libro[];
    console.log(respuesta);
  } catch (error) {
console.log(this.libros);
  }
}


}
