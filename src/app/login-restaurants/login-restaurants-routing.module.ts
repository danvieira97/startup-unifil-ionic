import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRestaurantsPage } from './login-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRestaurantsPageRoutingModule {}
