import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
   selector: 'dev-login',
   templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService ){

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
        .subscribe(res => console.log, err => console.log(err))

  }

}
