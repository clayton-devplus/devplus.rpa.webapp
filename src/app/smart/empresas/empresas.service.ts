import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = "https://rpa.devplus.com.br";

@Injectable({ providedIn: 'root'})
export class EmpresasService { 

    constructor(private http: HttpClient) { }

    listEmpresas() {
        this.http.get<Object[]>(API + '/empresas');
    }

}
