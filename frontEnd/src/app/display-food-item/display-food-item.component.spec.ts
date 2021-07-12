import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodItemComponent } from './display-food-item.component';

describe('DisplayFoodItemComponent', () => {
  let component: DisplayFoodItemComponent;
  let fixture: ComponentFixture<DisplayFoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFoodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
