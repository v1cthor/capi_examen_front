import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../interfaces/usuarios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpclient: HttpClient) { }

  private URL = environment.apiUrl;

  getUsuarios() {
    return this.httpclient.get<Usuarios[]>(`${this.URL}/getUsuarios`);
  }
}
