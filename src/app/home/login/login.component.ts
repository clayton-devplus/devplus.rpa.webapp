import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
   selector: 'dev-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @Input() loginFail = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router ){

    this.loginForm = this.formBuilder.group({

      userName: ['', Validators.required],
      password: ['', Validators.required]

    });

  }

  ngOnInit(): void {


  }

  login(){

    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authService
        .authenticate(userName, password)
        .subscribe(() => {
          console.log('logou');
          this.router.navigate(['empresas']);
        },
          err => {
            console.log(err);
            this.loginForm.reset();
            this.loginFail =true;
          })

  }

}
