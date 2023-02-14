import { Component } from "@angular/core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'dev-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  user = faCircleUser

}
