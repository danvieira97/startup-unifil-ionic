import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-restaurants',
  templateUrl: './register-restaurants.page.html',
  styleUrls: ['./register-restaurants.page.scss'],
})
export class RegisterRestaurantsPage implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private alertController: AlertController
  ) {}

  public formRegister: FormGroup;
  ngOnInit() {
    this.formRegister = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      availableTables: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  async onSubmit() {
    const name = this.formRegister.value.name;
    const email = this.formRegister.value.email;
    const availableTables = this.formRegister.value.availableTables;
    const password = this.formRegister.value.password;
    const confirmPassword = this.formRegister.value.confirmPassword;

    const availableDays = [];
    for (let i = 1; i <= 31; i++) {
      availableDays.push(i);
    }

    const restaurant = {
      name: name,
      email: email,
      availableTables: availableTables,
      availableDays: availableDays,
      password: password,
      confirmPassword: confirmPassword,
    };

    const alert = await this.alertController.create({
      header: name,
      cssClass: 'custom-alert',
      message: 'Registrado com sucesso',
      buttons: ['OK'],
    });

    const alertError = await this.alertController.create({
      header: 'Erro',
      cssClass: 'custom-alert',
      message: 'Erro ao registrar o restaurante',
      buttons: ['OK'],
    });

    await this.http
      .post(
        'http://18.231.187.61:3000/restaurants/createRestaurant',
        restaurant
      )
      .subscribe({
        next: (res) => {
          if (res == 'OK') {
            alert.present();
          }
        },
        error: (error) => {
          alertError.present();
        },
        complete: () => alert.present(),
      });
  }
}
