import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private alertController: AlertController
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
      message: 'Credencias Inválidas',
      buttons: ['OK'],
    });

    const user = {
      email: email,
      password: password,
    };
    await this.http
      .post('http://localhost:3000/clients/login', user)
      .subscribe();
  }
}
