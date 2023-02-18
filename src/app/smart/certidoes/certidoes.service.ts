import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Certidao } from "./certidoes";

//const API = "https://rpa.devplus.com.br";
const API = "https://localhost:7109";

@Injectable({ providedIn:'root' })
export class CertidoesService { 

    constructor(private http: HttpClient) { }

    listCertidoes() {
        return this.http.get<Certidao[]>(API + '/ConsultaCnd');

    }

}