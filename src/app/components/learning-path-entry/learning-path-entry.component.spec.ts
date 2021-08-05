import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathEntryComponent } from './learning-path-entry.component';

describe('LearningPathEntryComponent', () => {
  let component: LearningPathEntryComponent;
  let fixture: ComponentFixture<LearningPathEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPathEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPathEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
