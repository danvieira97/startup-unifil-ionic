import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private readonly http: HttpClient) {}

  public formRegister: FormGroup;
  ngOnInit() {
    this.formRegister = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      celphone: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  async onSubmit() {
    console.log(this.formRegister.value);
    const name = this.formRegister.value.name;
    const email = this.formRegister.value.email;
    const celphone = this.formRegister.value.celphone;
    const password = this.formRegister.value.password;
    const confirmPassword = this.formRegister.value.confirmPassword;

    const user = {
      name: name,
      email: email,
      celphone: celphone,
      password: password,
      confirmPassword: confirmPassword,
    };

    await this.http
      .post('http://localhost:3000/clients/createClient', user)
      .subscribe();
  }
}
