import { TestBed } from '@angular/core/testing';

import { MetzService } from './metz.service';

describe('MetzService', () => {
  let service: MetzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
