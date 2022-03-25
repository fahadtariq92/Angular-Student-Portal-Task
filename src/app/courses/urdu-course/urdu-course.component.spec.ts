import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduCourseComponent } from './urdu-course.component';

describe('UrduCourseComponent', () => {
  let component: UrduCourseComponent;
  let fixture: ComponentFixture<UrduCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrduCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrduCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
