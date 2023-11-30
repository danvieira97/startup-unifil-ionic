import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-restaurants',
  templateUrl: './login-restaurants.page.html',
  styleUrls: ['./login-restaurants.page.scss'],
})
export class LoginRestaurantsPage implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}

  public formData: FormGroup;
  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    const email = this.formData.value.email;
    const password = this.formData.value.password;

    const alert = await this.alertController.create({
      header: 'Credencias Inválidas',
      cssClass: 'custom-alert',
      message: 'Credencias incorretas!',
      buttons: ['OK'],
    });

    const restaurant = {
      email: email,
      password: password,
    };

    this.http
      .post('http://18.231.187.61:3000/restaurants/loginRestaurant', restaurant)
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/restaurant-home'], {
            queryParams: { id: res._id },
          });
        },
        error: (_error) => {
          alert.present();
        },
      });
  }
}
