import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "../app.routing.module";
import { CoreModule } from "../core/core.module";
import { HeaderComponent } from "../core/header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresaForm } from "./empresas/empresa-form/empresa-form.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { SmartComponent } from "./smart.component";

@NgModule({
    declarations: [
      EmpresasComponent,
      EmpresaForm,
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
