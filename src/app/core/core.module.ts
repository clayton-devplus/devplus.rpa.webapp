import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome/fontawesome.module";
import { AppRoutingModule } from "../app.routing.module";
import { RequestInterceptor } from "./auth/request.interceptor";
import { HeaderComponent } from "./header/header.component";
import { HeaderModule } from "./header/header.module";
import { MenuComponent } from "./menu/menu.component";
import { MenuModule } from "./menu/menu.module";
import { CPFCNPJPipe } from "./pipes/cnpjcpf.pipe";
import { PopupComponent } from "./popup/popup.component";

@NgModule({
    declarations: [
      CPFCNPJPipe,
      PopupComponent
    ],
    exports: [
      MenuComponent, 
      HeaderComponent, 
      CPFCNPJPipe,
      PopupComponent
    ],
    imports: [
      CommonModule,
      MenuModule,
      HeaderModule
    ],

    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
      }
    ]

})
export class CoreModule { }
