import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBibliotecaComponent } from './pagina-biblioteca.component';

describe('PaginaBibliotecaComponent', () => {
  let component: PaginaBibliotecaComponent;
  let fixture: ComponentFixture<PaginaBibliotecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaBibliotecaComponent]
    });
    fixture = TestBed.createComponent(PaginaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
