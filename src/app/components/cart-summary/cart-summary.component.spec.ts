import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CartSummaryComponent } from './cart-summary.component';

describe('CartSummaryComponent', () => {
  let component: CartSummaryComponent;
  let fixture: ComponentFixture<CartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartSummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render shipping title', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('.greyBox span').textContent;
    expect(compiled).toContain('SHIPPING');
  });
  it('should render shipping price', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('.greyBox span:last-of-type').textContent;
    expect(compiled).toContain('$23.80');
  });
  it('should render subtotal price', () => {
    spyOn(component, 'calculateShipping');
    fixture.componentInstance.subtotal = 12.12;
    fixture.detectChanges();
    expect(component.calculateShipping).toHaveBeenCalled();
    const subtotalPrice = fixture.debugElement.nativeElement.querySelector('#subtotal span:last-of-type').textContent;
    expect(subtotalPrice).toEqual('$12.12');
  });

  it('should calculate grand total', () => {
    spyOn(component, 'calculateShipping');
    fixture.componentInstance.subtotal = 12.12;
    fixture.detectChanges();
    expect(component.calculateShipping).toHaveBeenCalled();
    const subtotalPrice = fixture.debugElement.nativeElement.querySelector('#grandTotal').textContent;
    const expectedPrice = 12.12 + 23.8;
    expect(subtotalPrice).toEqual(`$${expectedPrice}`);
  });
});
