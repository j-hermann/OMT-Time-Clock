import { TestBed } from '@angular/core/testing';

import { TimeClockService } from './time-clock.service';

describe('TimeClockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeClockService = TestBed.get(TimeClockService);
    expect(service).toBeTruthy();
  });
});
