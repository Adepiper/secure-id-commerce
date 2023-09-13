import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './shared/app-nav/app-nav.component';
import { ECommerceHomeComponent } from './pages/e-commerce-home/e-commerce-home.component';
import { ECommerceCheckoutComponent } from './pages/e-commerce-checkout/e-commerce-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ECommerceHomeComponent,
    ECommerceCheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AppNavComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
