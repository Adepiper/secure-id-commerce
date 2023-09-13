import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-e-commerce-home',
  templateUrl: './e-commerce-home.component.html',
  styleUrls: ['./e-commerce-home.component.scss'],
})
export class ECommerceHomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  cartItems$ = this.productService.cartItems$;
  cartItems!: Product[];

  ngOnInit(): void {
    this.cartItems$.subscribe((data) => {
      this.cartItems = data;
    });
  }

  products$ = this.productService.products$;

  addTocart(product: Product) {
    this.itemInCart(product)
      ? this.productService.removeFromCart(product)
      : this.productService.addToCart(product);
  }

  itemInCart(product: Product) {
    return this.cartItems.includes(product);
  }
}
