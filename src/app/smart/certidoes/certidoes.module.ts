import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CertidoesListComponent } from "./certidoes-list/certidoes-list.component";
import { CertidoesStatusComponent } from "./certidoes-status/certidoes-status.component";

@NgModule({

    declarations:[
        CertidoesListComponent,
        CertidoesStatusComponent
    ],
    exports:[
        CertidoesListComponent
    ],
    imports:[
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]

})
export class CertidoesModule { }
