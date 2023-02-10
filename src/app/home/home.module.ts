import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [CommonModule]
})
export class HomeModule { }
