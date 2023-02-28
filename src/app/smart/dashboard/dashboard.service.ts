import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ServiceStatus } from "./models/service-status";

const API = "https://rpa.devplus.com.br"
//const API = "https://localhost:7109"

@Injectable({
  providedIn:'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  statusCnd() {
      return this.http.get<ServiceStatus[]>(API + '/Dashboard/cnd');
  }
  statusGinfes() {
      return this.http.get<ServiceStatus[]>(API + '/Dashboard/ginfes');
  }

}
