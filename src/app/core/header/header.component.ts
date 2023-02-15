import { Component } from "@angular/core";
import { faCircleUser, faGears, faTools } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'dev-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  //Icones
  user = faCircleUser
  faGears = faGears
  faTools = faTools

  user$: Observable<User| null>;
  userInfo: User | null = null;

  constructor(private userService: UserService){

    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.userInfo = user);

  }

}
