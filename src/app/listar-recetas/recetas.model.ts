export class Recetas{
   
    nombre:string="";
    metodo_preparacion:string="";
    ingredientes:string[]=[];
    Img:string="";

    constructor(nombre:string="",metodo_preparacion:string="",ingredientes:string[]=[],Img:string=""){
        this.nombre=nombre;
        this.metodo_preparacion=metodo_preparacion;
        this.ingredientes=ingredientes;
        this.Img=Img
    }

}