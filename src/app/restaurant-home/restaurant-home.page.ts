import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.page.html',
  styleUrls: ['./restaurant-home.page.scss'],
})
export class RestaurantHomePage implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private alertController: AlertController
  ) {}

  public formRegister: FormGroup;
  ngOnInit() {
    this.formRegister = new FormGroup({
      name: new FormControl(),
      availableTables: new FormControl(),
    });

    const id = window.location.href.split('?')[1].split('=')[1];
    this.http.get('http://18.231.187.61:3000/restaurants/' + id).subscribe({
      next: (res: any) => {
        this.formRegister.setValue({
          name: res.name,
          availableTables: res.availableTables,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  async onSubmit() {
    const id = window.location.href.split('?')[1].split('=')[1];
    const name = this.formRegister.value.name;
    const availableTables = this.formRegister.value.availableTables;

    const restaurant = {
      name: name,
      availableTables: availableTables,
    };

    const alert = await this.alertController.create({
      header: name,
      cssClass: 'custom-alert',
      message: 'Alterado com sucesso',
      buttons: ['OK'],
    });

    const alertError = await this.alertController.create({
      header: 'Erro',
      cssClass: 'custom-alert',
      message: 'Erro ao atualizar o restaurante',
      buttons: ['OK'],
    });

    await this.http
      .patch(
        'http://18.231.187.61:3000/restaurants/updateRestaurant/' + id,
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
