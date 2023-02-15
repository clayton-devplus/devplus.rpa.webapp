import { Component } from "@angular/core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'dev-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  user = faCircleUser
  user$: Observable<User| null>;
  userInfo: User | null = null;

  constructor(private userService: UserService){

    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.userInfo = user);

  }

}
