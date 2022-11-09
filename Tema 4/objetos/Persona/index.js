function Persona(n, e){
  this.nombre=n;
  this.edad=e;

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
    if(persona instanceof Persona){
      //console.log("Nombres: "+this.nombre+" // "+persona.getNombre());
      //console.log("Edades: "+this.edad+" // "+persona.getEdad());
      if(this.nombre == persona.getNombre() && this.edad == persona.getEdad()) return 1;
      return 2;
    }
    return false;
  }
}

let persona1 = new Persona("Juan",17);
let persona2 = new Persona("Juan",17);
let persona3 = persona1;

//persona2 = new String("hola");
//persona2.setNombre("Lucas");

if(persona1.sonIguales(persona2)==1) console.log("Son iguales");
else if(persona1.sonIguales(persona2)==2) console.log("Son diferentes");
else console.log("El objeto indicado no es una instancia de la clase Persona");

