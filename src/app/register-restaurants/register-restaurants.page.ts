import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-restaurants',
  templateUrl: './register-restaurants.page.html',
  styleUrls: ['./register-restaurants.page.scss'],
})
export class RegisterRestaurantsPage implements OnInit {
  constructor(private readonly http: HttpClient) {}

  public formRegister: FormGroup;
  ngOnInit() {
    this.formRegister = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  async onSubmit() {
    console.log(this.formRegister.value);
    const name = this.formRegister.value.name;
    const email = this.formRegister.value.email;
    const password = this.formRegister.value.password;
    const confirmPassword = this.formRegister.value.confirmPassword;

    const restaurant = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    await this.http
      .post('http://localhost:3000/restaurants/createRestaurant', restaurant)
      .subscribe();
  }
}
