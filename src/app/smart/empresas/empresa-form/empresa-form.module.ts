import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EmpresaFormComponent } from "./empresa-form.component";

@NgModule({
    declarations:[EmpresaFormComponent],
    imports:[CommonModule, ReactiveFormsModule, FontAwesomeModule, FormsModule],
    exports:[EmpresaFormComponent]
})
export class EmpresaFormModule {}