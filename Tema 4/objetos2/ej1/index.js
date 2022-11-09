class Jugador{
  constructor(n){
    this.fuerza = 1;
    this.nombre = n;
  }
  
  incrementarFuerza(){
    this.fuerza++;
  }

  consultarFuerza(){
    console.log("Fuerza del Jugador " + this.nombre + ": "+this.fuerza + " puntos.");
  }
}

let jugadores = [new Jugador("Mario"), new Jugador("Jesus")];

jugadores[0].incrementarFuerza();

for(j of jugadores) j.consultarFuerza();

