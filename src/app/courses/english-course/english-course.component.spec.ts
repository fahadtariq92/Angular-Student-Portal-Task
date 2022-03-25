import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishCourseComponent } from './english-course.component';

describe('EnglishCourseComponent', () => {
  let component: EnglishCourseComponent;
  let fixture: ComponentFixture<EnglishCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
