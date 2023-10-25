import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPlanComponent } from './supplier-plan.component';

describe('SupplierPlanComponent', () => {
  let component: SupplierPlanComponent;
  let fixture: ComponentFixture<SupplierPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
