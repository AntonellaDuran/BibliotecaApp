import { TestBed } from '@angular/core/testing';

import { ServicioSolicitudAyudaoService } from './servicio-solicitud-ayudao.service';

describe('ServicioSolicitudAyudaoService', () => {
  let service: ServicioSolicitudAyudaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSolicitudAyudaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
