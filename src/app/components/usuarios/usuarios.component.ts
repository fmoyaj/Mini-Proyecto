import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor (private usuarioService: UsuarioService) {}

  usuario: Usuario[]=[];

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuario => this.usuario = usuario)
  }

  
  columnas = ['nombre', 'correo', 'contrasenha', 'binder', 'boton']


  agregarUsuario(nombre:string, correo:string, contrasenha:string, binder:string): void{
    this.usuarioService.agregarUsuario({nombre, correo, contrasenha, binder} as Usuario).subscribe(usuario => {this.usuario.push(usuario);
    });
  }

  eliminar(i){
    const email = this.usuario[i].correo
    this.usuarioService.borrarUsuario(email).subscribe(_=>this.obtenerUsuarios());
    this.usuario.splice(1);
    console.log(this.usuario);
  }
 
  
  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios()
      .subscribe(usuarios => this.usuario = usuarios);
  }
}

