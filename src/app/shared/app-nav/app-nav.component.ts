import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {
  cartProducts: any[] = [];
  subTotal = 0;

  redirecttoSale() {}
}
