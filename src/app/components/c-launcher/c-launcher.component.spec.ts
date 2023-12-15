import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLauncherComponent } from './c-launcher.component';

describe('CLauncherComponent', () => {
  let component: CLauncherComponent;
  let fixture: ComponentFixture<CLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLauncherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
