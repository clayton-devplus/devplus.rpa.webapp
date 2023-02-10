import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = "http://35.198.30.217:3000"

@Injectable({  providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  authenticate(userName: string, password: string) {
      return this.http.post(API + '/security', { NomeUsuario: userName, Senha: password })
  }

}
