import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PgdasListComponent } from "./pgdas-list/pgdas-list.component";

@NgModule({
    declarations:[PgdasListComponent],
    exports:[PgdasListComponent],
    imports:[CommonModule]
})
export class PgdasModule { }