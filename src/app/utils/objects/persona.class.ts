export class Persona{

private id:string='';
private nombre:string='';
private image:string='';
private genero:string='';
private especie:string='';

constructor() {}

setId(id:string){
    this.id=id;
}

setNombre(nombre:string){
    this.nombre=nombre;
}

setImage(image:string){
    this.image=image;
}

setGenero(genero:string){
    this.genero=genero;
}
setEspecie(especie:string){
this.especie=especie;
}
getId(){
    return this.id;
}
getNombre(){
    return this.nombre;
}
getImage(){
    return this.image;
}
getGenero(){
  return this.genero;
}
getEspecie(){
  return this.especie;
}

}
