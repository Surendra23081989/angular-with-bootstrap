import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualyCardComponent } from './annualy-card.component';

describe('AnnualyCardComponent', () => {
  let component: AnnualyCardComponent;
  let fixture: ComponentFixture<AnnualyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualyCardComponent]
    });
    fixture = TestBed.createComponent(AnnualyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
