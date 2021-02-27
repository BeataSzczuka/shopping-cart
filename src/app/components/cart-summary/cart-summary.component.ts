import { Component, Input, OnInit } from '@angular/core';
import { ProceedCheckoutService } from 'src/app/services/proceed-checkout/proceed-checkout.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  shipping: number;

  private _subtotal: number;
  get subtotal(): number {
    return this._subtotal;
  }
  @Input() set subtotal(value: number) {
    this._subtotal = value;
    this.calculateShipping();
  }

  constructor(private proceedCheckoutService: ProceedCheckoutService) {}

  ngOnInit(): void {
    this.shipping = 23.8;
  }

  calculateShipping() {
    if (this._subtotal > 100) this.shipping = 0;
  }

  onProceedToCheckout() {
    this.proceedCheckoutService.onButtonClicked();
  }
}
