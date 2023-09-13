import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { products } from '../metadata/mockProductData';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>(products);
  products$ = this.products.asObservable();

  private cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  addToCart(cart: Product) {
    const items = [...this.cartItems.value, cart];
    this.cartItems.next(items);
  }

  updateCartItemQuantity(cart: Product, tag: 'add' | 'minus') {
    const carts = [...this.cartItems.value];

    const indexofCart = carts.findIndex(
      (data) => data.productId === cart.categoryId
    );
    const item = {
      ...cart,
      quantity: tag === 'add' ? cart.quantity++ : cart.quantity--,
    };
    carts[indexofCart] = item;

    this.cartItems.next(carts);
  }

  removeFromCart(cart: Product) {
    const items = [...this.cartItems.value].filter(
      (item) => item.productId !== cart.productId
    );

    this.cartItems.next(items);
  }

  clearAllCart() {
    this.cartItems.next([]);
  }

  subTotal() {
    return this.cartItems.value.reduce(
      (prev, acc) => prev + acc.productPrice * acc.quantity,
      0
    );
  }
}
