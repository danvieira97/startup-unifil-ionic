import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private alertController: AlertController
  ) {}

  restaurants: any[] = [];
  currentRestaurant: any[] = [];
  restaurantName = '';
  availableDays: string[] = [];
  availableTables = Number;
  reservationDate = '';
  hasRestaurant = false;

  async ngOnInit() {
    this.restaurants = [];
    await this.http
      .get<any[]>('http://18.231.187.61:3000/restaurants/getAllRestaurants')
      .forEach((value) => {
        value.forEach((data) => {
          this.restaurants.push([
            data.name,
            data.availableDays,
            data.availableTables,
            data._id,
          ]);
        });
      });
  }

  handleChange(e: any) {
    let restaurantName = e.target.value;
    this.restaurantName = restaurantName;
    this.currentRestaurant = this.restaurants.filter(
      (r) => r[0] === restaurantName
    );
    this.hasRestaurant = true;
    this.availableDays = this.currentRestaurant[0][1];
    this.availableTables = this.currentRestaurant[0][2];
  }

  onDateTimeChanged(e: any) {
    this.reservationDate = e.target.value;
  }

  async makeResarvation(name: string) {
    const currentRestaurant = this.restaurants.filter((r) => r[0] === name);

    this.http
      .patch(
        'http://18.231.187.61:3000/restaurants/makeReservation/' +
          currentRestaurant[0][3],
        null
      )
      .subscribe();

    const alert = await this.alertController.create({
      header: this.restaurantName,

      cssClass: 'custom-alert',
      message: 'Reserva feita com sucesso!',
      buttons: ['OK'],
    });

    await alert.present();
    window.location.reload();
  }
}
