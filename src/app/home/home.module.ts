import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [LoginComponent],
    exports: [LoginComponent],
    imports: [
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule
    ]
})
export class HomeModule { }
