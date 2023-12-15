import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../models/recetas.model';

@Pipe({
  name: 'filtroReceta',
  standalone: true
})
export class FiltroRecetaPipe implements PipeTransform {

  transform(recetas: Receta[],parametro:string): Receta[] {
    
    let r:Receta[]=[];
    //
    
    if(parametro=="")
    return recetas;
    
    for(let i of recetas)
      if(i.nombre.toLowerCase().indexOf(parametro)>-1)
        {
          r.push(i);
         // alert(recetas);
        }

        // for(let j of r)
        // alert(j.getNombre());
    return r;
  }

}
