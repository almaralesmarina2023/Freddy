import { Injectable, OnInit } from '@angular/core';
import { Receta } from '../models/recetas.model';
import { Ingredientes } from '../models/Ingredientes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService implements OnInit {

  //i:Ingredientes=new Ingredientes("sal","2 cucharadas");
  // ingredientes1:Ingredientes[]=[this.i];
  // ingredientes2:Ingredientes[]=[this.i];
  // r1=new Receta("Pollo a la Gordon Blue","Freir por 30 min",this.ingredientes1,"./assets/chicharritas-platano-e1497017839458-150x150.jpg");
  // r2=new Receta("Pescado Cubano ","Vuela y Vuelta 30 min",this.ingredientes2,"./assets/fritura-malanga-e1494857372839-150x150.jpg");
  
  
  //DSarrayRecetas:Receta[]=[this.r1,this.r2];
  DSarrayRecetas:Receta[]=[];
  
  constructor(private http:HttpClient) {
    //this.http.get<Receta[]>("http://localhost:3000/Recetas").subscribe(dato=>{this.DSarrayRecetas=dato;})
    //alert("constructor"+this.DSarrayRecetas);
   }
  ngOnInit(): void {
    
    alert("Oninit ds")
  }

  getDatos():Receta[]{
    //alert("GetDatos del ds"+this.DSarrayRecetas)
    this.http.get<Receta[]>("http://localhost:3000/Recetas").subscribe(dato=>{this.DSarrayRecetas=dato;})
    return this.DSarrayRecetas;
  }
  obtener_Receta(indice:number):Receta{
    return this.DSarrayRecetas[indice];
  }
  Adicionar_Receta(receta:Receta):void{
    this.postReceta(receta);
  }
  EliminarReceta(posicion:number,idBD:number):void{
   this.deleteReceta(posicion,idBD);
    //this.DSarrayRecetas.splice(posicion,1);
  }
  ModificarReceta(posicion:number,receta:Receta):void{
    this.putReceta(receta,posicion);
  }

  postReceta(r1:Receta):void{
    
   this.http.post<Receta>("http://localhost:3000/Recetas",{
   "id":0,
   "nombre":r1.nombre,
   "metodo_preparacion":r1.metodo_preparacion,
   "ingredientes":r1.ingredientes,
   "Img":"./assets/fritura-malanga-e1494857372839-150x150.jpg"
 }).subscribe(datos=>{r1=datos;});
  this.DSarrayRecetas.push(r1);
 }
 putReceta(r1:Receta,indice:number):void{
  let camino:string="http://localhost:3000/Recetas/"+r1.id
 this.http.put<Receta>(camino,{
 "id":r1.id,
 "nombre":r1.nombre,
 "metodo_preparacion":r1.metodo_preparacion,
 "ingredientes":r1.ingredientes,
 "Img":"./assets/chicharritas-platano-e1497017839458-150x150.jpg"
}).subscribe(datos=>{r1=datos;});
this.DSarrayRecetas[indice]=r1;
}

deleteReceta(posicion:number,idBD:number):void{
  let camino:string="http://localhost:3000/Recetas/"+idBD;
 let result!:Receta;
  this.http.delete<Receta>(camino).subscribe(datos=>{result=datos;});
this.DSarrayRecetas.splice(posicion,1);
}
}


