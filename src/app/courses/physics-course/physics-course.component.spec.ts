import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsCourseComponent } from './physics-course.component';

describe('PhysicsCourseComponent', () => {
  let component: PhysicsCourseComponent;
  let fixture: ComponentFixture<PhysicsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
