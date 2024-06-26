import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCardComponent } from './monthly-card.component';

describe('MonthlyCardComponent', () => {
  let component: MonthlyCardComponent;
  let fixture: ComponentFixture<MonthlyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyCardComponent]
    });
    fixture = TestBed.createComponent(MonthlyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
