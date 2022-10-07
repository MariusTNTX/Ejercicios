/* Elaborar un programa que calcule la suma de los números 
   múltiplos de 3 y 7 a partir del número 9 y finaliza en 
  el número 45, no deben incluirse en la suma los números 
  comprendidos entre 21 y 28. */

let suma=0;
for(let i=9; i<=45; i++){
  if(i%3==0 && i%7==0 && (i<21 || i>28)) suma+=i;
}

alert(`Suma de los números múltiplos de 3 y 7: ${suma}`)