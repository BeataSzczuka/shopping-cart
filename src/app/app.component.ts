import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping-cart';
  showCart = true;

  proceedToCheckout() {
    this.showCart = false;
  }
}
