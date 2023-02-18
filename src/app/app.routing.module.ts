import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./core/auth/login.guard";
import { NotLoggedGuard } from "./core/auth/not-logged.guard";
import { LoginComponent } from "./home/login/login.component";
import { CertidoesListComponent } from "./smart/certidoes/certidoes-list/certidoes-list.component";
import { DashboardComponent } from "./smart/dashboard/dashboard.component";
import { EmpresasComponent } from "./smart/empresas/empresas.component";
import { SmartComponent } from "./smart/smart.component";

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      canActivate: [LoginGuard]
    },
    {
      path: 'smart',
      component: SmartComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          path: 'empresas',
          component: EmpresasComponent
        },
        {
          path: 'certidoes',
          component: CertidoesListComponent
        }
      ],
      canActivate: [NotLoggedGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
