import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarConfigComponent } from './progress-bar-config.component';

describe('ProgressBarConfigComponent', () => {
  let component: ProgressBarConfigComponent;
  let fixture: ComponentFixture<ProgressBarConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
