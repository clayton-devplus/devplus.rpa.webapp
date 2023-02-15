import { Injectable } from "@angular/core";

const KEY = 'smart.token';
@Injectable({  providedIn: 'root'})
export class TokenService {

    hasToken() {
        if(this.getToken() == '')
            return false;
        else
            return true;
    }

    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }

    getToken(): string {

       let token = window.localStorage.getItem(KEY);
       if(!token)
        return '';
      else
        return token;
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

}
