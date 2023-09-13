import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = new BehaviorSubject<any[]>([]);
  products$ = this.products.asObservable();

  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  addToCart(cart: any) {
    const items = [...this.cartItems.value, cart];
    this.cartItems.next(items);
  }

  removeFromCart(cart: any) {
    const items = [...this.cartItems.value].filter(
      (item) => item.id !== cart.id
    );

    this.cartItems.next(items);
  }
}
