import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "src/app/app.routing.module";
import { MenuModule } from "../menu/menu.module";
import { HeaderComponent } from "./header.component";
import { UserInfoComponente } from "./user-info/user-info.component";

@NgModule({
  declarations: [
    HeaderComponent,
    UserInfoComponente
  ],
  exports:[HeaderComponent],
  imports:[
    CommonModule,
    MenuModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class HeaderModule {



}
