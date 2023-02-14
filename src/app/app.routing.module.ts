import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./home/login/login.component";
import { DashboardComponent } from "./smart/dashboard/dashboard.component";
import { EmpresasComponent } from "./smart/empresas/empresas.component";
import { SmartComponent } from "./smart/smart.component";

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'smart',
      component: SmartComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
