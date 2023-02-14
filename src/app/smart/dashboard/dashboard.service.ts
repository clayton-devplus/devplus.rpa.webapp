import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cnd } from "./models/cnd";

const API = "https://localhost:7109"

@Injectable({
  providedIn:'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  statusCnd() {
      return this.http.get<Cnd[]>(API + '/Dashboard/cnd');
  }

}
