import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-e-commerce-checkout',
  templateUrl: './e-commerce-checkout.component.html',
  styleUrls: ['./e-commerce-checkout.component.scss'],
})
export class ECommerceCheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  subTotal = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.subTotal = this.productService.subTotal();
    });
  }

  checkout() {}

  clearCartItems() {
    this.productService.clearAllCart();
  }

  updateProductItem(cart: Product, tag: 'add' | 'minus') {
    this.productService.updateCartItemQuantity(cart, tag);
  }

  removeItem(cart: Product) {
    this.productService.removeFromCart(cart);
  }
}
