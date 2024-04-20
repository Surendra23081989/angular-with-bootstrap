import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorGridComponent } from './author-grid.component';

describe('AuthorGridComponent', () => {
  let component: AuthorGridComponent;
  let fixture: ComponentFixture<AuthorGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorGridComponent]
    });
    fixture = TestBed.createComponent(AuthorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
