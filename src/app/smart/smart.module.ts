import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { HeaderComponent } from "../core/header/header.component";
import { EmpresasComponent } from "./empresas/empresas.component";

@NgModule({
    declarations: [
      EmpresasComponent, 
    ],
    exports:[
      EmpresasComponent,
      HeaderComponent
    ],
    imports:[
      CommonModule,
      CoreModule
    ]
})
export class SmartModule { }
