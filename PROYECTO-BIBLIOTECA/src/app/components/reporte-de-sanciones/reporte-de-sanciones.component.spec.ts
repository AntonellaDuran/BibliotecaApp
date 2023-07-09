import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeSancionesComponent } from './reporte-de-sanciones.component';

describe('ReporteDeSancionesComponent', () => {
  let component: ReporteDeSancionesComponent;
  let fixture: ComponentFixture<ReporteDeSancionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteDeSancionesComponent]
    });
    fixture = TestBed.createComponent(ReporteDeSancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
