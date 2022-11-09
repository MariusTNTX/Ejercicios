class Punto{
  constructor(x, y){
    this.x = (!isNaN(x))?x:0;
    this.y = (!isNaN(x))?y:0;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  cambiar(x, y){
    this.x = (!isNaN(x))?x:0;
    this.y = (!isNaN(x))?y:0;
  }
  copia(){
    return new Punto(this.x, this.y);
  }
  iguales(punto){
    return (this.x==punto.getX() && this.y==punto.getY());
  }
  suma(punto){
    if(punto instanceof Punto) return new Punto(this.x+punto.getX(), this.y+punto.getY());
    this.copia();
  }
  toString(){
    return "("+this.x+","+this.y+")";
  }
}

let puntos = [new Punto(3,-2), new Punto(-6,-3), new Punto(8,9)];

puntos[1].cambiar(6,3);

puntos[0]=puntos[1].copia();

if(puntos[0].iguales(puntos[1])) console.log("Punto 0 y Punto 1 son iguales");
else console.log("Punto 0 y Punto 1 son diferentes");

puntos[2] = puntos[2].suma(puntos[1]);

for(p of puntos) console.log(p.toString());