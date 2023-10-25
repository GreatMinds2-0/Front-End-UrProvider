import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBySupplierComponent } from './products-by-supplier.component';

describe('ProductsBySupplierComponent', () => {
  let component: ProductsBySupplierComponent;
  let fixture: ComponentFixture<ProductsBySupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBySupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBySupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
