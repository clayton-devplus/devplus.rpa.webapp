import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";

const API = "https://rpa.devplus.com.br"

@Injectable({  providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient,
              private userService: UserService) {

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
        this.userService.setToken(authToken.token);
        console.log(res.headers.get('Baerer'));
        console.log(`User ${userName} authenticated with token ${authToken.token}`);
    }))
  }

}
