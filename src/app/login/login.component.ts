import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('token');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.authService.loginUser(this.loginForm.getRawValue())) {
        sessionStorage.setItem('token', 'zalogowany');
        this.router.navigate(['cats']).then();
      }
    } else {
      this.loginForm.markAsTouched();
    }
    console.log('submit')
  }
}
