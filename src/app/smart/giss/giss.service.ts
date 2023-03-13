import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Giss } from "./giss";

const API = "https://rpa.devplus.com.br";
//const API = "https://localhost:7109";

@Injectable({
    providedIn:'root'
})
export class GissService {

    constructor(private http: HttpClient) { }

    listGiss() {
        return this.http.get<Giss[]>(API + '/ConsultaGiss');

    }
    getDocument(id: number) {
        return this.http.get<Text>(API + '/ConsultaGiss/Document/' + id);
    }

}