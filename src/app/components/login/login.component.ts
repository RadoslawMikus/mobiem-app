import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}

  noPassword() {
    alert(
      'Aby uzyskać dostęp do testowania Twoich kampanii reklamowych skontaktuj się z osobą obsługującą, z Mobiem / Polsat Media.'
    );
  }
}
