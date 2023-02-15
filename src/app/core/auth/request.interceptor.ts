import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

  constructor (private tokenService: TokenService,
               private router: Router) {



  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.tokenService.hasToken()) {

      const token = this.tokenService.getToken();
      req = req.clone({
            setHeaders: { 'Authorization' : 'Bearer ' + token }
      })

    }
    return next.handle(req).pipe(catchError( (error) => {

      if(error.status == 401)
      {
          this.tokenService.removeToken();
          this.router.navigate(['/']);
          return error;
      }

    })) as Observable<HttpEvent<any>>;
  }

}
