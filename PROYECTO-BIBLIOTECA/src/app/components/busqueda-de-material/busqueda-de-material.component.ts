import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/modulos/materiales-bibliograficos/materiales';
import { ServicioMaterialesService } from 'src/app/services/servicio-materiales-bibliograficos/servicio-materiales.service';

@Component({
  selector: 'app-busqueda-de-material',
  templateUrl: './busqueda-de-material.component.html',
  styleUrls: ['./busqueda-de-material.component.css']
})
export class BusquedaDeMaterialComponent implements OnInit {
titulo = '';
materiales: Material[];

  constructor(private servicioMaterial: ServicioMaterialesService){}

ngOnInit(): void {
  this.getMateriales();
}

async buscar() {
  try {
    const respuesta = await this.servicioMaterial.buscarPorClase(this.titulo).toPromise();
    this.materiales = respuesta as Material[];
  } catch (error) {
console.log(this.materiales);
  }
}

getMateriales(){
  this.servicioMaterial.obtenerMateriales().subscribe(
    res => {
      this.materiales = res;
    }
  )
}

}
