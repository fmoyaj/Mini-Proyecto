import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  constructor (private usuarioService: UsuarioService) {}

  
  usuario: Usuario = {
    nombre: '',
    correo: '',
    contrasenha: '',
    binder: ''
}


  ngOnInit(): void {
  }

  validarDatos(): void {
    if (!this.usuario.correo){
      alert("Ingrese un correo")
    }
  }

 
  

  agregarUsuario(): void{
    this.usuarioService.agregarUsuario(this.usuario).subscribe();
  }

}
