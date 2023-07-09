import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Solicitud } from 'src/app/modulos/solicitud-ayuda/solicitud';

@Injectable({
  providedIn: 'root'
})
export class ServicioSolicitudAyudaoService {
API: String = 'http://localhost:5000'
solicitud:Solicitud[];

  constructor(private http: HttpClient) { }

  crearSolicitud(ayuda:Solicitud): Observable<Solicitud>{
    return this.http.post<Solicitud>(`${this.API}/solicitudes`,ayuda);
  }

  getSolicitudes():Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${this.API}/solicitudes`);
  }

}
