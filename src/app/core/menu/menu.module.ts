import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MenuComponent } from "./menu.component";

@NgModule({

    declarations: [MenuComponent],
    exports:[MenuComponent],
    imports:[CommonModule,FontAwesomeModule]

})
export class MenuModule { }
