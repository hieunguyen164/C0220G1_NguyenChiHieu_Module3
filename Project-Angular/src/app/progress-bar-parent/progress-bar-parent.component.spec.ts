import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarParentComponent } from './progress-bar-parent.component';

describe('ProgressBarParentComponent', () => {
  let component: ProgressBarParentComponent;
  let fixture: ComponentFixture<ProgressBarParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
