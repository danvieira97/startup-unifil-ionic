import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRestaurantsPage } from './register-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRestaurantsPageRoutingModule {}
