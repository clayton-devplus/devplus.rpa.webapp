import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = "http://35.198.30.217:3000"

@Injectable({
  providedIn:'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  listEmpresas() {
      this.http.get<Object[]>(API + '/empresas');
  }

}
