import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/modulos/solicitud-ayuda/solicitud';
import { ServicioSolicitudAyudaoService } from 'src/app/services/servicio-solicitud-ayuda/servicio-solicitud-ayudao.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  ayuda: Solicitud = {
    nombres: "",
    correoinstitucional:"",
    asunto:"",
    mensaje:''
  }

  solicitudes: Solicitud[];

  constructor(private servicioAyuda: ServicioSolicitudAyudaoService){}

ngOnInit(): void {
  
}

crearSolicitud(){
  return this.servicioAyuda.crearSolicitud(this.ayuda).subscribe(
    res => {
      console.log(res);
    } 
  )
}


getSolicitudes(){
  this.servicioAyuda.getSolicitudes().subscribe(
    res =>{
     this.solicitudes = res;
    }
  )
}



}
