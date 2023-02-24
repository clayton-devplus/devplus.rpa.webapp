import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CoreModule } from "src/app/core/core.module";
import { CPFCNPJPipe } from "src/app/core/pipes/cnpjcpf.pipe";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { EmpresaFormModule } from "./empresa-form/empresa-form.module";
import { EmpresasComponent } from "./empresas.component";

@NgModule({
    declarations:[
        EmpresasComponent
    ],
    exports:[
        EmpresasComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        EmpresaFormModule,
        CoreModule
    ]
})
export class EmpresaModule { }
