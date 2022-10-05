/* Que pida un número y diga si es par o impar */

let num, tipo;
do{
  num = prompt("Escribe un número");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
} while(isNaN(num) || !num);

tipo = (num%2==0) ? "Par" : "Impar";

alert(`El número ${num} es ${tipo}`);