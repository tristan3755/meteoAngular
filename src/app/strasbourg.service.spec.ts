import { TestBed } from '@angular/core/testing';

import { StrasbourgService } from './strasbourg.service';

describe('StrasbourgService', () => {
  let service: StrasbourgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrasbourgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
