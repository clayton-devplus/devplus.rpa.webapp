import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "../app.routing.module";
import { CoreModule } from "../core/core.module";
import { HeaderComponent } from "../core/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { SmartComponent } from "./smart.component";

@NgModule({
    declarations: [
      EmpresasComponent,
      SmartComponent,
      DashboardComponent
    ],
    exports:[
      EmpresasComponent,
      DashboardComponent
    ],
    imports:[
      CommonModule,
      CoreModule,
      AppRoutingModule,
      FontAwesomeModule
    ]
})
export class SmartModule { }
