import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "./empresa";

//const API = "https://rpa.devplus.com.br";
const API = "https://localhost:7109";

@Injectable({ providedIn: 'root'})
export class EmpresasService {

    constructor(private http: HttpClient) { }

    listEmpresas() {
        return this.http.get<Empresa[]>(API + '/empresas');

    }

}
