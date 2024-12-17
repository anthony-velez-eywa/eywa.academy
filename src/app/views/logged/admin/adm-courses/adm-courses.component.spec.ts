import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCoursesComponent } from './adm-courses.component';

describe('AdmCoursesComponent', () => {
  let component: AdmCoursesComponent;
  let fixture: ComponentFixture<AdmCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
