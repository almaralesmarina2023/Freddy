import { Pipe, PipeTransform } from '@angular/core';
import { Recetas } from './listar-recetas/recetas.model';

@Pipe({
  name: 'filtroReceta',
  standalone: true
})
export class FiltroRecetaPipe implements PipeTransform {

  transform(recetas: Recetas[],parametro:string): Recetas[] {
    
    let r:Recetas[]=[];
    
    
    if(parametro=="")
    return recetas;

    for(let i of recetas)
      if(i.getNombre().toLowerCase().indexOf(parametro)>-1)
        r.push(i);

        // for(let j of r)
        // alert(j.getNombre());
    return r;
  }

}
