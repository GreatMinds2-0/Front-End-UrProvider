import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEditProfileComponent } from './store-edit-profile.component';

describe('StoreEditProfileComponent', () => {
  let component: StoreEditProfileComponent;
  let fixture: ComponentFixture<StoreEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
