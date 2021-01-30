import { TestBed } from '@angular/core/testing';

import { FormateurhttpService } from './formateurhttp.service';

describe('FormateurhttpService', () => {
  let service: FormateurhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormateurhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
