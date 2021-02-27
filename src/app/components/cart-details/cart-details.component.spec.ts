import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CartDetailsComponent } from './cart-details.component';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CartDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render update button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('#update');
    expect(button.textContent).toEqual('Update Shopping Cart');
  });

  it('should render update button', fakeAsync(() => {
    spyOn(component, 'calculateSubtotal');
    const button = fixture.debugElement.nativeElement.querySelector('#update');
    button.click();
    tick();
    expect(component.calculateSubtotal).toHaveBeenCalled();
  }));

  fit('should render table', () => {
    spyOn(component, 'calculateSubtotal');
    const table = fixture.debugElement.nativeElement.querySelectorAll('table th');
    const titles = Array.prototype.map.call(table, function (t) {
      return t.textContent;
    });

    expect(titles).toContain('Product Name');
    expect(titles).toContain('Unit Price');
    expect(titles).toContain('Qty');
    expect(titles.length).toEqual(3);
  });
});
