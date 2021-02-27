import { TestBed } from '@angular/core/testing';

import { ProceedCheckoutService } from './proceed-checkout.service';

describe('ProceedCheckoutService', () => {
  let service: ProceedCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceedCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
