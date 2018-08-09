import { TestBed, inject } from '@angular/core/testing';

import { GoogleloginService } from './googlelogin.service';

describe('GoogleloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleloginService]
    });
  });

  it('should be created', inject([GoogleloginService], (service: GoogleloginService) => {
    expect(service).toBeTruthy();
  }));
});
