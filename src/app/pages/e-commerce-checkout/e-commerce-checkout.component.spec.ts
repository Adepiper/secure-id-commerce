import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceCheckoutComponent } from './e-commerce-checkout.component';

describe('ECommerceCheckoutComponent', () => {
  let component: ECommerceCheckoutComponent;
  let fixture: ComponentFixture<ECommerceCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
