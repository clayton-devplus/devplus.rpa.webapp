import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MenuModule } from "../menu/menu.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports:[CommonModule,MenuModule, FontAwesomeModule, AppRoutingModule]
})
export class HeaderModule {



}
