import { Component, OnInit } from "@angular/core";
import { faCheckCircle, faExclamationCircle, faFire, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { User } from "src/app/core/user/user";
import { UserService } from "src/app/core/user/user.service";
import { DashboardService } from "./dashboard.service";
import { ServiceStatus } from "./models/service-status";

@Component({
  selector: 'dev-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  cndStatus: ServiceStatus[] = [];
  ginfesStatus: ServiceStatus[] = [];
  gissStatus: ServiceStatus[] = [];


  faFire = faFire;
  faListAlt = faListAlt;
  faCheckCircle = faCheckCircle;
  faExclamationCircle = faExclamationCircle;
  user$: Observable<User | null>;
  userInfo: User | null = null;

  constructor(private dashboardService: DashboardService,
    private userService: UserService) {

    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.userInfo = user);

  }
  ngOnInit(): void {
    
    this.dashboardService.statusCnd().subscribe( ss => {
        this.cndStatus = ss;
    });

    this.dashboardService.statusGinfes().subscribe( ss => {
      this.ginfesStatus = ss;
    });

    this.dashboardService.statusGiss().subscribe( ss => {
      this.gissStatus = ss;
    });

  }



}
