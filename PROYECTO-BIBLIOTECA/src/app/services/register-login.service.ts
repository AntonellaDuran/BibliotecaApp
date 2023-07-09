import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Estudiante} from '../modulos/estudiante/estudiante';
import { Observable } from 'rxjs';
import { Login } from '../modulos/estudiante/login';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  API: String = 'http://localhost:5000'
  estudiante: Estudiante[];

  constructor(private httpClient: HttpClient) { }

  crearRegistro(estud:Estudiante): Observable<Estudiante>{
    return this.httpClient.post<Estudiante>(`${this.API}/estudiantes`,estud);
  }

  validarCredenciales(login: Login): Observable<any> {
    const url = `${this.API}/login`;
    return this.httpClient.post(url, login);
  }
}
