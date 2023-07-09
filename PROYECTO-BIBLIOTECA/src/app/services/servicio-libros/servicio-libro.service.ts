import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Libro } from 'src/app/modulos/libros/libro';

@Injectable({
  providedIn: 'root'
})
export class ServicioLibroService {
API: String = 'http://localhost:5000'
libros: Libro[];

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.API}/libros`);
  }

  getlibrosTitulo(titulo:string){
    return this.http.get(`${this.API}/libros/${titulo}`);
  }


}
