import { TestBed, inject } from '@angular/core/testing';

import { ApiobserveService } from './apiobserve.service';

describe('ApiobserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiobserveService]
    });
  });

  it('should be created', inject([ApiobserveService], (service: ApiobserveService) => {
    expect(service).toBeTruthy();
  }));
});
