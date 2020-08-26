import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from './models/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private usuarioURL = 'http://localhost:8080/api/peliculas'; // URL de la API

  obtenerUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.usuarioURL)
  }


}
