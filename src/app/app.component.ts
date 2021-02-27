import { Component } from '@angular/core';
import { ProceedCheckoutService } from './services/proceed-checkout/proceed-checkout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';
  showCart = true;

  constructor(private proceedCheckoutService: ProceedCheckoutService) {
    this.proceedCheckoutService.buttonClick().subscribe(() => {
      this.proceedToCheckout();
    });
  }

  proceedToCheckout() {
    this.showCart = false;
  }
}
