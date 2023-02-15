import { Component, OnInit } from "@angular/core";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { DashboardService } from "./dashboard.service";
import { Cnd } from "./models/cnd";



@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  cndStatus: Cnd[] = [];
  faFire = faFire

  constructor(private dashboardService: DashboardService) {


  }
  ngOnInit(): void {
    this.dashboardService.statusCnd().subscribe( ss => {
        this.cndStatus = ss;
    });
  }



}
