import { Component } from "@angular/core";
import { faCoffee, faHouse } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'dev-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

    isShow: boolean = false;
    faCoffee = faCoffee;
    faHouse = faHouse;

    toggle() {
        this.isShow = !this.isShow;
    }
}
