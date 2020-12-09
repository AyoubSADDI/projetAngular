import { TestBed } from '@angular/core/testing';

import { ServiceAgenceService } from './service-agence.service';

describe('ServiceAgenceService', () => {
  let service: ServiceAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
