import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GissListComponent } from "./giss-list/giss-list.component";
import { GissStatusComponent } from "./giss-status/giss-status.component";

@NgModule({

    declarations:[
        GissListComponent, 
        GissStatusComponent
    ],
    exports:[
        GissListComponent,
        GissStatusComponent
    ],
    imports:[
        CommonModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
    
})
export class GissModule { }