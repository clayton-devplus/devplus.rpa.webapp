import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ginfes } from "./ginfes";

const API = "https://rpa.devplus.com.br";
//const API = "https://localhost:7109";

@Injectable({
    providedIn:'root'
})
export class GinfesService {

    constructor(private http: HttpClient) { }

    listGiss() {
        return this.http.get<Ginfes[]>(API + '/ConsultaGiss');

    }

}