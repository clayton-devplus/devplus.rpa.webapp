import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CertidoesListComponent } from "./certidoes-list/certidoes-list.component";

@NgModule({

    declarations:[CertidoesListComponent],
    exports:[CertidoesListComponent],
    imports:[
        CommonModule,
        FontAwesomeModule
    ]

})
export class CertidoesModule { }