import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { TokenService } from "../token/token.service";

const API = "http://35.198.30.217:3000"

@Injectable({  providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) {

  }

  authenticate(userName: string, password: string) {
    return this.http
    .post(
        API + '/security',
        { NomeUsuario: userName, Senha: password },
        { observe: 'response' }
    )
    .pipe(tap(res => {
        const authToken = res.body as any;
        this.tokenService.setToken(authToken.token);
        console.log(res.headers.get('Baerer'));
        console.log(`User ${userName} authenticated with token ${authToken.token}`);
    }))
  }

}
