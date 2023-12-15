import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c-launcher',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './c-launcher.component.html',
  styleUrl: './c-launcher.component.css'
})
export class CLauncherComponent {

}
