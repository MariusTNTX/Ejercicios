/* Programa que te calcula la potencia de un número 
   pidiendo el número base y el exponente. */

let base, exp;
do{
  base = prompt("Introduce un número:");
  if(isNaN(base) || !base) alert("No has introducido un número, intentalo de nuevo");
} while(isNaN(base) || !base);

do{
  exp = prompt("Introduce un número:");
  if(isNaN(exp) || !exp) alert("No has introducido un número, intentalo de nuevo");
} while(isNaN(exp) || !exp);

alert(`Operación: ${base}^${exp}=${(base**exp)}`);