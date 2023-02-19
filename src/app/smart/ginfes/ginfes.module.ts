import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GinfesListComponent } from "./ginfes-list/ginfes-list.component";

@NgModule({
    declarations:[GinfesListComponent],
    exports:[GinfesListComponent],
    imports:[CommonModule, FontAwesomeModule]
})
export class GinfesModule { }