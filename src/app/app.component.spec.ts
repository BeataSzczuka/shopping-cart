import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shopping-cart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-cart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.nativeElement.querySelector('h2').textContent).toContain('Shopping Cart');
  });
  it('should render button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.nativeElement.querySelector('#header .blackBtn').textContent).toContain('Proceed to checkout');
  });
  it('should render button', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.componentInstance;
    spyOn(app, 'proceedToCheckout');
    let button = fixture.debugElement.nativeElement.querySelector('#header .blackBtn');

    button.click();
    tick();
    expect(app.proceedToCheckout).toHaveBeenCalled();
  }));
});
