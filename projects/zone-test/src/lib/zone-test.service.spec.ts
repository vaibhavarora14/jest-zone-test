import { TestBed } from '@angular/core/testing';

import { ZoneTestService } from './zone-test.service';

describe('ZoneTestService', () => {
  let service: ZoneTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
