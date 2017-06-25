import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  LoginForm: FormGroup;
  LoginMessage: string;

  loading: boolean = false;

  alertMessage: string;
  alertVisible: boolean = false;
  alertTimer: any

  constructor(private fb: FormBuilder, private nav: Router)
  {


  }

  closeAlert(): void
  {
    this.alertVisible = false;
  }

  Login(value: any)
  {
    this.loading = true;
    this.closeAlert();
    
    setTimeout(() =>
    {
      this.loading = false;
      if (this.alertTimer)
      {
        this.alertTimer = null;
      }

      var message = 3 == 3 ? "Cannot connect to login service." : "The error message from a login service would go here.";
      this.alertMessage = message;
      this.alertVisible = true;
      this.alertTimer = setTimeout(() =>
      {
        this.closeAlert();
      }, 10000);
      this.ResetForm(this.LoginForm, false);
    }, 5000);
  }


  public LoginButtonAppearance(): string
  {
    if (this.LoginForm.valid && !this.LoginForm.controls["RememberMe"].value && !this.loading) {
      this.LoginMessage = "Login in";
      return "btn-warning";
    } else if (this.LoginForm.valid && this.LoginForm.controls["RememberMe"].value && !this.loading) {
      this.LoginMessage = "Login in"
      return "btn-success";
    } else if (!this.LoginForm.valid && !this.loading) {
      this.LoginMessage = "Validation Issue(s)";
      return "btn-danger";
    }
    else if (this.loading && this.LoginForm.valid) {
      this.LoginMessage = "Logging in..."
      return "btn-success";
    }

  }

  private ResetForm(form: FormGroup, complete?: boolean)
  {
    if (complete) {
      form.reset();
    } else {
      form.controls["Password"].reset();
    }

  }

  ngOnInit()
  {
  this.LoginForm = this.fb.group({
    'Email': ['', Validators.compose([Validators.email, Validators.required])],
    'Password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    'RememberMe': [false]
  });
  }

}
