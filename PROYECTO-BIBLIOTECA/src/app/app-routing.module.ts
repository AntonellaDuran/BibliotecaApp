import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaDeMaterialComponent } from './components/busqueda-de-material/busqueda-de-material.component';
import { ConsultarRepertorioComponent } from './components/consultar-repertorio/consultar-repertorio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaBibliotecaComponent } from './components/pagina-biblioteca/pagina-biblioteca.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReporteDeSancionesComponent } from './components/reporte-de-sanciones/reporte-de-sanciones.component';
import { loginGuard } from './guards/login';



const routes: Routes = [
  {path:"", redirectTo: "pagina-biblioteca", pathMatch:"full"},
  {path:"busqueda-de-material",component: BusquedaDeMaterialComponent,
   canActivate:[loginGuard]
},
  {path:"consultar-repertorio",component: ConsultarRepertorioComponent,
  canActivate:[loginGuard]
},
  {path:"contacto",component: ContactoComponent,
canActivate:[loginGuard]},
  {path:"inicio",component:InicioComponent},
  {path:"pagina-biblioteca",component:PaginaBibliotecaComponent},
  {path:"prestamos",component:PrestamosComponent,
canActivate:[loginGuard]},
  {path:"registro",component:RegistroComponent},
  {path:"reporte-de-sanciones",component:ReporteDeSancionesComponent},

  {path:"**", redirectTo:"pagina-biblioteca", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }