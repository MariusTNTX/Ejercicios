function Persona(){
  this.nombre="Manuel";
  this.edad=17;

  this.setNombre=function(nombre){
    this.nombre=nombre;
  }
  this.setEdad=function(edad){
    this.edad=edad;
  }
  this.getNombre=function(){
    return this.nombre;
  }
  this.getEdad=function(){
    return this.edad;
  }

  this.sonIguales=function(persona){
    return (this.nombre == persona.getNombre() && this.edad == persona.getEdad());
  }
}

let persona1 = new Persona();
let persona2 = new Persona();
let persona3 = persona1;

persona2.setNombre("Lucas");

if(persona1.sonIguales(persona2)) console.log("Son iguales");
else console.log("Son diferentes");

