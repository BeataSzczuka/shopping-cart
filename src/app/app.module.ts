import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [AppComponent, CartDetailsComponent, CartSummaryComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
