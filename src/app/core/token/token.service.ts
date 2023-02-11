import { Injectable } from "@angular/core";

const KEY = 'smart.token';
@Injectable({  providedIn: 'root'})
export class TokenService { 

    hasToken() {
        if(this.getToken() == null)
            return false;
        else
            return true;    
    }

    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

}