import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarDynamicComponent } from './progress-bar-dynamic.component';

describe('ProgressBarDynamicComponent', () => {
  let component: ProgressBarDynamicComponent;
  let fixture: ComponentFixture<ProgressBarDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
