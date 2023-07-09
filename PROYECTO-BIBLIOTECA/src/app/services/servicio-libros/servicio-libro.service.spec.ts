import { TestBed } from '@angular/core/testing';

import { ServicioLibroService } from './servicio-libro.service';

describe('ServicioLibroService', () => {
  let service: ServicioLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
