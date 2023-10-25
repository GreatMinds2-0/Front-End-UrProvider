import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSupplierProfileComponent } from './store-supplier-profile.component';

describe('StoreSupplierProfileComponent', () => {
  let component: StoreSupplierProfileComponent;
  let fixture: ComponentFixture<StoreSupplierProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSupplierProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSupplierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
