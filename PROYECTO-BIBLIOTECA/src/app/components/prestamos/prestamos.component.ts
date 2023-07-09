import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'src/app/modulos/prestamo/prestamo';
import { ServicioLibroService } from 'src/app/services/servicio-libros/servicio-libro.service';
import { ServicioMaterialesService } from 'src/app/services/servicio-materiales-bibliograficos/servicio-materiales.service';
import { ServicioPrestamosService } from 'src/app/services/servicio-prestamos/servicio-prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  cedula = '';
  prestamos:Prestamo[];


  prestamo: Prestamo = {
    cedula:"",
    nombres:"",
    cantidad:0,
    libro:"",
    correo:"",
    observacion:"",
    codigolibro:"",
    fechaprestamo:new Date(),
    fechadevolucion:new Date()
  }

  constructor(private servicioPrestamo: ServicioPrestamosService,
    private servicioLibro: ServicioLibroService,
    private servicioMaterial:ServicioMaterialesService
    ){}

ngOnInit(): void {
}

hacerPrestamo(){
  this.prestamo.cantidad = Number(this.prestamo.cantidad);
  this.prestamo.fechaprestamo = new Date(this.prestamo.fechaprestamo);
  this.prestamo.fechadevolucion = new Date(this.prestamo.fechadevolucion);

   this.servicioPrestamo.hacerPrestamo(this.prestamo).subscribe(
    res => {
      console.log(res);
    } 
  )
}


  async buscar() {
    try {
      const respuesta = await this.servicioPrestamo.buscarPrestamoCedula(this.cedula).toPromise();
      this.prestamos = respuesta as Prestamo[];
    } catch (error) {
  console.log(this.prestamos);
    }
  }
  
}

