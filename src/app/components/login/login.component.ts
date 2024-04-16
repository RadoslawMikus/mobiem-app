import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginActivateGuard } from 'src/app/login-activate.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string;
  password: string;
  show_popup: boolean = false;
  logowanie: boolean = false;
  constructor(
    private router: Router,
    private loginActivate: LoginActivateGuard
  ) {}

  openPopup() {
    this.show_popup = true;
  }

  closePopup() {
    this.show_popup = false;
  }

  zaloguj() {
    if (this.login === 'admin' && this.password === 'admin') {
      console.log('zalogowano');
      this.loginActivate.przeloguj();
    }
  }
}
