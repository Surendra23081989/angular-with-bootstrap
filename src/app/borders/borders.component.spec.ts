import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersComponent } from './borders.component';

describe('BordersComponent', () => {
  let component: BordersComponent;
  let fixture: ComponentFixture<BordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BordersComponent]
    });
    fixture = TestBed.createComponent(BordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
