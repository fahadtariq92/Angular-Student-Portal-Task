import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCourseComponent } from './math-course.component';

describe('MathCourseComponent', () => {
  let component: MathCourseComponent;
  let fixture: ComponentFixture<MathCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
