import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProceedCheckoutService {
  private subject = new Subject();

  constructor() {}

  onButtonClicked() {
    this.subject.next();
  }

  buttonClick(): Observable<any> {
    return this.subject.asObservable();
  }
}
