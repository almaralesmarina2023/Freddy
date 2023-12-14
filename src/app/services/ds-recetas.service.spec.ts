import { TestBed } from '@angular/core/testing';

import { DsRecetasService } from './ds-recetas.service';

describe('DsRecetasService', () => {
  let service: DsRecetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsRecetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
