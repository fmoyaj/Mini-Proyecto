import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Usuarios } from 'src/app/models/usuarios';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private usuarioService: UsuarioService ) { }
  usuarios: Usuarios[] =[];

  estudiantes = [
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'},
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'},
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'}
  ]



  columnasAMostrar2 = ['nombre', 'correo', 'contrasenha', 'binder', 'boton']

  columnasAMostrar = ['rut', 'nombre', 'apellido', 'correo', 'boton']


  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => this.usuarios= usuarios);
  }

  eliminar(i:number){
    this.estudiantes.splice(i,1);
  }

}
