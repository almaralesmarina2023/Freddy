import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-recetas',
  templateUrl: './detalles-recetas.component.html',
  styleUrls: ['./detalles-recetas.component.css']
})
export class DetallesRecetasComponent {
indice:number=0;

constructor(private route:ActivatedRoute)
{
  this.indice=this.route.snapshot.params['id'];
} 
}
