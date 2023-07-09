import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRepertorioComponent } from './consultar-repertorio.component';

describe('ConsultarRepertorioComponent', () => {
  let component: ConsultarRepertorioComponent;
  let fixture: ComponentFixture<ConsultarRepertorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarRepertorioComponent]
    });
    fixture = TestBed.createComponent(ConsultarRepertorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
