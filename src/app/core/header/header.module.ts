import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MenuModule } from "../menu/menu.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  exports:[HeaderComponent],
  imports:[CommonModule,MenuModule, FontAwesomeModule]
})
export class HeaderModule {



}
