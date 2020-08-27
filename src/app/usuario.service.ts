import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './models/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private usuarioURL = 'http://localhost:8080/api/usuarios/'; // URL de la API

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioURL)
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  agregarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.usuarioURL+"add/", usuario, this.httpOptions)
  }

  borrarUsuario(correo: String) {
    return this.http.delete(`${this.usuarioURL}usuarios/eliminar/${correo}`);
  }

}
