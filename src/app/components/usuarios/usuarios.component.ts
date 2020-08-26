import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  estudiantes = [
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'},
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'},
    {rut: '1-9', nombre:'perrito', apellido:'gonzalez', correo:'a@gmail.com'}
  ]

  usuarios = [{nombre: 'Pepita', correo: 'pepita@gmail.com', contrasenha: 'abcde4g', binder: 'Diseño 2020'} ]

  columnasAMostrar2 = ['nombre', 'correo', 'contrasenha', 'binder', 'boton']

  columnasAMostrar = ['rut', 'nombre', 'apellido', 'correo', 'boton']

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(i:number){
    this.estudiantes.splice(i,1);
  }

}
