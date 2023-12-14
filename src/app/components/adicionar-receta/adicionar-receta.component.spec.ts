import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarRecetaComponent } from './adicionar-receta.component';

describe('AdicionarRecetaComponent', () => {
  let component: AdicionarRecetaComponent;
  let fixture: ComponentFixture<AdicionarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
