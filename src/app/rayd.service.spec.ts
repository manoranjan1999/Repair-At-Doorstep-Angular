import { TestBed } from '@angular/core/testing';

import { RaydService } from './rayd.service';

describe('RaydService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaydService = TestBed.get(RaydService);
    expect(service).toBeTruthy();
  });
});
