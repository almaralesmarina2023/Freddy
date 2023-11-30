export class Recetas{
   
    nombre:string="";
    metodo_preparacion:string="";
    ingredientes:string[]=[];

    constructor(nombre:string,metodo_preparacion:string,ingredientes:string[]){
        this.nombre=nombre;
        this.metodo_preparacion=metodo_preparacion;
        this.ingredientes=ingredientes
    }

}