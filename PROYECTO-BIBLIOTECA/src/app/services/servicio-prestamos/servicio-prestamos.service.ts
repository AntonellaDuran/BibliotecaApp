import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Prestamo } from 'src/app/modulos/prestamo/prestamo';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrestamosService {

API: String = 'http://localhost:5000'
prestamos: Prestamo[];

  constructor(private http:HttpClient) { }



  hacerPrestamo(pres:Prestamo): Observable<Prestamo>{
    return this.http.post<Prestamo>(`${this.API}/prestamos`,pres);
  }

  buscarPrestamoCedula(cedula:String){
    return this.http.get(`${this.API}/prestamos/${cedula}`);
  }



}
