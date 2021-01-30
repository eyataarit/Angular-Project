import { TestBed } from '@angular/core/testing';

import { ParticipanthttpService } from './participanthttp.service';

describe('ParticipanthttpService', () => {
  let service: ParticipanthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipanthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
