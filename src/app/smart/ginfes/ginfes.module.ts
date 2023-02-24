import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CoreModule } from "src/app/core/core.module";
import { EmpresaFormModule } from "../empresas/empresa-form/empresa-form.module";
import { EmpresaModule } from "../empresas/empresas.module";
import { GinfesListComponent } from "./ginfes-list/ginfes-list.component";

@NgModule({
    declarations:[GinfesListComponent],
    exports:[GinfesListComponent],
    imports:[CommonModule, FontAwesomeModule, EmpresaModule, EmpresaFormModule, CoreModule]
})
export class GinfesModule { }
