import { TestBed, inject } from '@angular/core/testing';

import { ResultServiceService } from './result-service.service';

describe('ResultServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultServiceService]
    });
  });

  it('should be created', inject([ResultServiceService], (service: ResultServiceService) => {
    expect(service).toBeTruthy();
  }));
});
