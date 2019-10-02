import { TestBed } from '@angular/core/testing';

import { KioskoTireCenterService } from './kiosko-tire-center.service';

describe('KioskoTireCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KioskoTireCenterService = TestBed.get(KioskoTireCenterService);
    expect(service).toBeTruthy();
  });
});
