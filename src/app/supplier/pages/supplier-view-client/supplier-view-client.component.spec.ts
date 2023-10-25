import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierViewClientComponent } from './supplier-view-client.component';

describe('SupplierViewClientComponent', () => {
  let component: SupplierViewClientComponent;
  let fixture: ComponentFixture<SupplierViewClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierViewClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierViewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
