import { TestBed } from '@angular/core/testing';

import { ServiceproviderService } from './serviceprovider.service';

describe('ServiceproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceproviderService = TestBed.get(ServiceproviderService);
    expect(service).toBeTruthy();
  });
});
