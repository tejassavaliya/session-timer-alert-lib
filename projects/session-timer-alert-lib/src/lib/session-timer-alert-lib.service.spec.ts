import { TestBed } from '@angular/core/testing';

import { SessionTimerAlertLibService } from './session-timer-alert-lib.service';

describe('SessionTimerAlertLibService', () => {
  let service: SessionTimerAlertLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionTimerAlertLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
