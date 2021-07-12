import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewFoodItemComponent } from './admin-add-new-food-item.component';

describe('AdminAddNewFoodItemComponent', () => {
  let component: AdminAddNewFoodItemComponent;
  let fixture: ComponentFixture<AdminAddNewFoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddNewFoodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
