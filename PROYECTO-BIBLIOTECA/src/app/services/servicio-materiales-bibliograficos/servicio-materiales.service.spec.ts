import { TestBed } from '@angular/core/testing';

import { ServicioMaterialesService } from './servicio-materiales.service';

describe('ServicioMaterialesService', () => {
  let service: ServicioMaterialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMaterialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
