import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterRestaurantsPageRoutingModule } from './register-restaurants-routing.module';

import { RegisterRestaurantsPage } from './register-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterRestaurantsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterRestaurantsPage],
})
export class RegisterRestaurantsPageModule {}
