import { Component } from "@angular/core";
import { faGears, faUserEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector:'dev-empresa-form',
    templateUrl:'./empresa-form.component.html'
})
export class EmpresaForm { 

    faBug = faUserEdit;
    faGears = faGears;

}