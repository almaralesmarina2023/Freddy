import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRecetasComponent } from './detalles-recetas.component';

describe('DetallesRecetasComponent', () => {
  let component: DetallesRecetasComponent;
  let fixture: ComponentFixture<DetallesRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesRecetasComponent]
    });
    fixture = TestBed.createComponent(DetallesRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
