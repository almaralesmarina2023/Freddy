import { Component } from '@angular/core';
import { DsRecetasService } from '../services/ds-recetas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './launcher.component.html',
  styleUrl: './launcher.component.css'
})
export class LauncherComponent {
constructor(private acceso:DsRecetasService){}
}
