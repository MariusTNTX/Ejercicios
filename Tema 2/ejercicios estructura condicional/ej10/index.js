/* En un Instituto una escuela está organizando un viaje 
de estudios, y requiere determinar cuánto debe cobrar a 
cada alumno y cuánto se debe pagar a la agencia de viajes 
por el servicio. La forma de cobrar es la siguiente: si 
son 100 alumnos o más, el importe por cada alumno es de 
65€; de 50 a 99 alumnos, e es de 70€, de 30 a 49, de 95€, 
y si son menos de 30, el importe del alquiler del autobús 
es de 4000€, sin importar el número de alumnos. Realiza 
un algoritmo que pregunte cuantos alumnos van a viajar y 
que determine el pago a la agencia de alquiler de 
autobuses y lo que debe pagar cada alumno por el viaje */

let numAlum, precioAlum, importe;

do{
  numAlum = prompt("¿Cuantos alumnos irán a la excursión?");
  if(isNaN(numAlum) || !numAlum) alert("No has introducido un número, intentalo de nuevo");
  else if(numAlum<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(numAlum) || !numAlum || numAlum <= 0);

if(numAlum>=100){
  precioAlum=65;
  importe=precioAlum*numAlum;
} else if(numAlum<100 && numAlum>=50){
  precioAlum=70;
  importe=precioAlum*numAlum;
} else if(numAlum<50 && numAlum>=30){
  precioAlum=95;
  importe=precioAlum*numAlum;
} else {
  importe=4000;
  precioAlum=importe/numAlum;
}

alert(` - Importe a pagar por el alumno: ${precioAlum}€\n - Importe total a pagar: ${importe}€`);