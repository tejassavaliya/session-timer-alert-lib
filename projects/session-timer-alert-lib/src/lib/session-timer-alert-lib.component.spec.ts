import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimerAlertLibComponent } from './session-timer-alert-lib.component';

describe('SessionTimerAlertLibComponent', () => {
  let component: SessionTimerAlertLibComponent;
  let fixture: ComponentFixture<SessionTimerAlertLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionTimerAlertLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionTimerAlertLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
