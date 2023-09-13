import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-e-commerce-checkout',
  templateUrl: './e-commerce-checkout.component.html',
  styleUrls: ['./e-commerce-checkout.component.scss'],
})
export class ECommerceCheckoutComponent {
  cartItems: Product[] = [];

  removeCart(cart: Product) {}

  subTotal = 0;
  checkout() {}
}
