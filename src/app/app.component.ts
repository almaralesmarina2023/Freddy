
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DsRecetasService } from './services/ds-recetas.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

}
