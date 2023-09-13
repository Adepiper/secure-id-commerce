import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  cartItems: Product[] = [];
  subTotal = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.subTotal = data.reduce((prev, acc) => prev + acc.productPrice, 0);
    });
  }

  redirecttoSale() {
    this.router.navigate(['/checkout']);
  }

  clearCartItems() {
    this.productService.clearAllCart();
  }
}
