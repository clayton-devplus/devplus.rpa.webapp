import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn:'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  constructor(private tokenService: TokenService){

    if(this.tokenService.hasToken())
      this.decodeAndNotify();
  }

  setToken(token: string){

    this.tokenService.setToken(token);
    this.decodeAndNotify();

  }

  getUser(){

    return this.userSubject.asObservable();

  }

  private decodeAndNotify() {

    const token: string = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);

  }

  logout() {

    this.tokenService.removeToken();
    this.userSubject.next(null);

  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}
