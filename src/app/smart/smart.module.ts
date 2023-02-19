import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "../app.routing.module";
import { CoreModule } from "../core/core.module";
import { HeaderComponent } from "../core/header/header.component";
import { CertidoesModule } from "./certidoes/certidoes.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresaFormComponent } from "./empresas/empresa-form/empresa-form.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { EmpresaModule } from "./empresas/empresas.module";
import { GinfesModule } from "./ginfes/ginfes.module";
import { GissModule } from "./giss/giss.module";
import { SmartComponent } from "./smart.component";

@NgModule({
    declarations: [
      SmartComponent,
      DashboardComponent
    ],
    exports:[
      DashboardComponent
    ],
    imports:[
      CommonModule,
      CoreModule,
      AppRoutingModule,
      FontAwesomeModule,
      EmpresaModule,
      CertidoesModule,
      GinfesModule,
      GissModule
    ]
})
export class SmartModule { }
