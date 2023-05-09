import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: string;
  password: string;
  show_popup: boolean = false;
  constructor() {}

  openPopup() {
    this.show_popup = true;
  }

  closePopup() {
    this.show_popup = false;
  }
}
