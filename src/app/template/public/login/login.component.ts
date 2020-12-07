import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }


  form = {
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  };
  notLogged = false;


  ngOnInit(): void {
  }

  submitLogin(): void {
    const user = {
      user: this.form.user.value,
      password: this.form.password.value
    };
    this.notLogged = !this.authService.doLogin(user);
  }

}
