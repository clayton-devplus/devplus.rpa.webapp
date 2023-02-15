import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../user/user.service";

@Component({
  selector: 'dev-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponente {

  user = faUserCircle
  constructor(private userService: UserService,
              private router: Router){

  }

  logout(){

    this.userService.logout();
    this.router.navigate(['']);
  }


}
