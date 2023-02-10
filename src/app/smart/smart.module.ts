import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import { EmpresasComponent } from "./empresas/empresas.component";

@NgModule({
    declarations: [EmpresasComponent],
    imports:[
      CommonModule,
      CoreModule
    ]
})
export class SmartModule { }
