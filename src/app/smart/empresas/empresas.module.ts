import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { EmpresaFormModule } from "./empresa-form/empresa-form.module";
import { EmpresasComponent } from "./empresas.component";

@NgModule({
    declarations:[
        EmpresasComponent,
    ],
    exports:[
        EmpresasComponent
    ],
    imports: [
        CommonModule,
        EmpresaFormModule,
        FontAwesomeModule
    ]
})
export class EmpresaModule { }