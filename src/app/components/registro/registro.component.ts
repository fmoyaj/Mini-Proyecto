import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hasLower: boolean = false;
  hasNum: boolean = true;
  
  constructor (private usuarioService: UsuarioService,
    private router:Router) {}

  

  
  usuario: Usuario = {
    nombre: '',
    correo: '',
    contrasenha: '',
    binder: ''
}


  ngOnInit(): void {
  }

  validarDatos(): void {
    if (!this.usuario.nombre){
      alert("Ingrese un nombre")
      return;
    }

    if (!this.usuario.correo){
      alert("Ingrese un correo")
      return;
    }

    if (!this.usuario.contrasenha){
      alert("Ingrese una contraseña")
      return;
    }

    if(!this.usuario.binder){
      alert("Ingrese un nombre de binder")
      return;
    }

    if(this.usuario.contrasenha.length < 4){
      alert("La contraseña debe tener al menos 4 caracteres")
      return;
    }

    if(this.usuario.contrasenha.search(/[a-zA-Z]/)== -1){
      alert("La contraseña debe tener al menos una letra y un número");
      return;
    }

    if(this.usuario.contrasenha.search(/\d/) == -1){
      alert("La contraseña debe tener al menos una letra y un número");
      return;
    }

    this.usuarioService.agregarUsuario(this.usuario).subscribe(_ => {alert("Registro exitoso"); this.router.navigate(['']);},
    error => {alert("Este correo ya se encuentra en uso")}
    );

  }

}
