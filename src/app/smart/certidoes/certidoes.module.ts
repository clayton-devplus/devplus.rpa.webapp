import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CertidoesListComponent } from "./certidoes-list/certidoes-list.component";

@NgModule({

    declarations:[CertidoesListComponent],
    exports:[CertidoesListComponent],
    imports:[CommonModule]

})
export class CertidoesModule { }