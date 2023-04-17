export class Usuario{

  private id:string='';
  private nombre:string='';
  private usuario:string='supervisor';
  private correo:string;
  private telefono:string='';
  private website:string='';
  private password:string='Raul@123';
  private direccion:Array<string>;
  private compañia:Array<string>;



  constructor() {}

  setId(id:string){
      this.id=id;
  }

  setNombre(nombre:string){
      this.nombre=nombre;
  }

  setImage(usuario:string){
      this.usuario=usuario;
  }

  setCorreo(correo:string){
      this.correo=correo;
  }
  setTelefono(telefono:string){
  this.telefono=telefono;
  }

  setDireccion(direccion:Array<string>){
    this.direccion=direccion;
  }
  setCompañia(compañia:Array<string>){
    this.compañia=compañia;
  }
  setWebsite(website:string){
    this.website=website;
  }
  setPassword(password:string){
    this.password=password;
  }
  getId(){
      return this.id;
  }
  getNombre(){
      return this.nombre;
  }
  getUsuario(){
      return this.usuario;
  }
  getPassword(){
    return this.password;
  }
  getCorreo(){
    return this.correo;
  }
  getTelefono(){
    return this.telefono;
  }
  getDireccion(){
    return this.direccion;
  }
  getCompañia(){
    return this.direccion;
  }

  }
