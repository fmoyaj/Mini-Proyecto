import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string;
  correo: string;
  contrasenha: string;
  binder: string;

  constructor (private usuarioService: UsuarioService) {}

  usuario: Usuario[]=[];


  ngOnInit(): void {
  }

  agregarUsuario(nombre, correo, contrasenha, binder): void{
    this.usuarioService.agregarUsuario({nombre, correo, contrasenha, binder} as Usuario).subscribe(usuario => {this.usuario.push(usuario);
    });
  }

}
