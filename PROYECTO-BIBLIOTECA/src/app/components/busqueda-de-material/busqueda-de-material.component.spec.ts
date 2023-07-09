import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaDeMaterialComponent } from './busqueda-de-material.component';

describe('BusquedaDeMaterialComponent', () => {
  let component: BusquedaDeMaterialComponent;
  let fixture: ComponentFixture<BusquedaDeMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaDeMaterialComponent]
    });
    fixture = TestBed.createComponent(BusquedaDeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
