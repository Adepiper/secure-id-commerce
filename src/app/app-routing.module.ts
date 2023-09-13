import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ECommerceHomeComponent } from './pages/e-commerce-home/e-commerce-home.component';
import { ECommerceCheckoutComponent } from './pages/e-commerce-checkout/e-commerce-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: ECommerceHomeComponent,
  },
  {
    path: 'checkout',
    component: ECommerceCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
