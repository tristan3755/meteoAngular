import { TestBed } from '@angular/core/testing';

import { NancyService } from './nancy.service';

describe('NancyService', () => {
  let service: NancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
