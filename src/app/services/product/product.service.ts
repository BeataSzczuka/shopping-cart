import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.url + '/products');
  }

  getAllCartProducts(): Observable<any> {
    return this.http.get(this.url + '/cart_products');
  }
}
