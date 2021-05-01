import { TestBed } from '@angular/core/testing';

import { ReimsService } from './reims.service';

describe('ReimsService', () => {
  let service: ReimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
