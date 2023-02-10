import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./home/login/login.component";
import { EmpresasComponent } from "./smart/empresas/empresas.component";

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'empresas', component: EmpresasComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
