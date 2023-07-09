import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/modulos/materiales-bibliograficos/materiales';

@Injectable({
  providedIn: 'root'
})
export class ServicioMaterialesService {
API: String = 'http://localhost:5000'
materiales: Material[];
  constructor(private http: HttpClient) { }

  buscarPorClase(titulo: string) {
    return this.http.get(`${this.API}/materiales/${titulo}`);
  }

  obtenerMateriales(): Observable<Material[]>{
    return this.http.get<Material[]>(`${this.API}/materiales`);
    }




}
