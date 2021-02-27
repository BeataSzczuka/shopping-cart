import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit {
  cartProducts: CartProduct[];
  subtotal: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const getProducts = this.productService.getAllProducts().pipe(
      mergeMap((allProducts) =>
        this.productService.getAllCartProducts().pipe(
          map((cartProducts) => {
            this.cartProducts = cartProducts.map((item) => ({
              quantity: item.quantity,
              product: allProducts.find((p) => p.id === item.productId),
            }));
            this.calculateSubtotal();
          })
        )
      )
    );

    getProducts.subscribe();
  }

  incrementQuantity(item) {
    this.cartProducts = this.cartProducts.map((cartProduct) =>
      cartProduct.product.id === item.product.id ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct
    );
  }
  decrementQuantity(item) {
    this.cartProducts = this.cartProducts.map((cartProduct) =>
      cartProduct.product.id === item.product.id ? { ...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct
    );
  }

  calculateSubtotal() {
    this.subtotal = 0;
    this.cartProducts.forEach((item) => (this.subtotal += item.quantity * item.product.price));
  }

  removeFromCart(item) {
    this.cartProducts = this.cartProducts.filter((val) => val.product.id !== item.product.id);
    this.calculateSubtotal();
  }
}
