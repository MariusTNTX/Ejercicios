/* Que genere número entero aleatorio entre min y max (ambos incluidos), 
que serán pasados como parámetros. */

let num1, num2;
do{
  num1 = prompt("El número aleatorio MENOR será:");
  if(isNaN(num1) || !num1) alert("No has introducido un número, intentalo de nuevo");
  /* else if(num1<=0) alert("Número no válido, intentalo de nuevo"); */
} while(isNaN(num1) || !num1 /* || num1 <= 0 */);

do{
  num2 = prompt("El número aleatorio MAYOR será:");
  if(isNaN(num2) || !num2) alert("No has introducido un número, intentalo de nuevo");
  else if(num1>=num2) alert("Número mayor o igual al número menor, intentalo de nuevo");
} while(isNaN(num2) || !num2 || num1>=num2);

function numeroRand(min, max){
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}

alert(numeroRand(num1,num2));