import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BusquedaDeMaterialComponent } from './components/busqueda-de-material/busqueda-de-material.component';
import { ConsultarRepertorioComponent } from './components/consultar-repertorio/consultar-repertorio.component';
import { PaginaBibliotecaComponent } from './components/pagina-biblioteca/pagina-biblioteca.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReporteDeSancionesComponent } from './components/reporte-de-sanciones/reporte-de-sanciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    BusquedaDeMaterialComponent,
    ConsultarRepertorioComponent,
    PaginaBibliotecaComponent,
    PrestamosComponent,
    RegistroComponent,
    ReporteDeSancionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
