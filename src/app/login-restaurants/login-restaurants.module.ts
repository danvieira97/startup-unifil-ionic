import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRestaurantsPageRoutingModule } from './login-restaurants-routing.module';

import { LoginRestaurantsPage } from './login-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRestaurantsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginRestaurantsPage],
})
export class LoginRestaurantsPageModule {}
