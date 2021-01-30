import { TestBed } from '@angular/core/testing';

import { FakesessionsService } from './fakesessions.service';

describe('FakesessionsService', () => {
  let service: FakesessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakesessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
