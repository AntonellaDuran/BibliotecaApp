import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterLoginService } from 'src/app/services/register-login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  logins: any = {
    correoinstitucional: '',
    pass: ''
  };


  constructor(private servicioRegisterLogin: RegisterLoginService,
    private router: Router
    ){}
  ngOnInit(): void {
    
  }

  sesion() {
    const login: any = {
      correoinstitucional: this.logins.correoinstitucional,
      pass: this.logins.pass
    };
    this.servicioRegisterLogin.validarCredenciales(login).subscribe(
      res => {
        if(!res.error){
          localStorage.setItem('token_biblio', res.token);
          console.log(res);
          this.router.navigate(['/pagina-biblioteca']);
        }else{
          console.log(res);
        }
      },
      error => {
        // Si las credenciales no son válidas, muestra un mensaje de error o realiza alguna acción adicional
        console.error(error);
      }
    );
  }
}



