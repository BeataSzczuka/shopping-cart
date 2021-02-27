import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  shipping: number;

  private _subtotal: number;

  @Input() set subtotal(value: number) {
    this._subtotal = value;
    this.calculateShipping();
  }

  constructor() {}

  ngOnInit(): void {}

  calculateShipping() {
    if (this._subtotal <= 100) this.shipping = 23.8;
    else this.shipping = 0;
  }
}
