import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CoreModule } from "src/app/core/core.module";
import { EmpresaFormModule } from "../empresas/empresa-form/empresa-form.module";
import { EmpresaModule } from "../empresas/empresas.module";
import { GinfesListComponent } from "./ginfes-list/ginfes-list.component";
import { GinfesReprocComponent } from "./ginfes-reproc/ginfes-reproc.component";
import { GinfesStatusComponent } from "./ginfes-status/ginfes-status.component";

@NgModule({
    declarations:[
      GinfesListComponent,
      GinfesStatusComponent,
      GinfesReprocComponent
    ],
    exports:[
      GinfesListComponent,
      GinfesStatusComponent
    ],
    imports:[
      CommonModule,
      ReactiveFormsModule,
      FontAwesomeModule,
      EmpresaModule,
      EmpresaFormModule,
      CoreModule
    ]
})
export class GinfesModule { }
