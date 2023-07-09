import { Component ,OnInit} from '@angular/core';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';
import { RegisterLoginService } from 'src/app/services/register-login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  estudiantes: Estudiante = {
    identificacion: "",
    nombres: "",
    telefono: "",
    carrera:"",
    correoinstitucional:"",
    pass:""
  }

  constructor(private servicioRegisterLogin: RegisterLoginService
    ){
  }

  ngOnInit(): void {
    
  }







  registrar(){
      return this.servicioRegisterLogin.crearRegistro(this.estudiantes).subscribe(
        res => {
          console.log(res);
        } 
      )
    }
  }

