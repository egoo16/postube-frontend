import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel('', '');
  usuario = '';
  recuerdame = true;

  constructor() {}

  ngOnInit(): void {}

  ingrear(formulario: NgForm): void {
    if (formulario.invalid) {
      return;
    }

    console.log(formulario);

    // this.router.navigate(['/home']);
  }
}
