import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private usuarioService: UsuarioService) {}

  usuario: Usuario[]=[];

  ngOnInit(): void {
  }

  agregarUsuario(nombre:string, correo:string, contrasenha:string, binder:string): void{
    this.usuarioService.agregarUsuario({nombre, correo, contrasenha, binder} as Usuario).subscribe(usuario => {this.usuario.push(usuario);
    });
  }

}
