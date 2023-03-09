import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GissListComponent } from "./giss-list/giss-list.component";

@NgModule({

    declarations:[
        GissListComponent
    ],
    exports:[
        GissListComponent
    ],
    imports:[
        CommonModule,
        FontAwesomeModule
    ]
    
})
export class GissModule { }