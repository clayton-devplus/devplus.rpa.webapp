import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pulse } from "./pulse";

const API = "https://rpa.devplus.com.br";
//const API = "https://localhost:7109";

@Injectable({providedIn:'root'})
export class PulseService { 
        
    constructor(private http: HttpClient) { }
    
    listOperators() {
        return this.http.get<Pulse[]>(API + '/Geral/pulse/get');

    }
    listOperatorsByService(service: number) {
        return this.http.get<Pulse[]>(API + '/Geral/pulse/get/' + service);

    }

}