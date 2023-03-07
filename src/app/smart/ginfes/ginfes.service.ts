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

    listGinfes() {
        return this.http.get<Ginfes[]>(API + '/ConsultaGinfes');

    }
    getDocument(id: number) {
        return this.http.get<Text>(API + '/ConsultaGinfes/Document/' + id);
    }
    reTry(id: number) {
      return this.http.get(API + '/ConsultaGinfes/Retry/' + id);
    }
    advancedReTry(id: number, instance: number) {

        console.log('intance: ' + instance);
        return this.http.get(API + '/ConsultaGinfes/Retry/' + id + '/' + instance);
    }

}
