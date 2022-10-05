/* Haz un script que le pregunte al usuario que cuantos lápices 
desea y determinar cuánto se debe pagar por una cantidad de 
lápices considerando que si son 1000 o más el costo es de 
0.85€; de lo contrario, el precio es de 0.9€ el lápiz. */

let num;
do{
  num = prompt("¿Cuantos lápices deseas comprar?");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num) || !num || num <= 0);

let precio = (num<1000) ? num * 0.85 : num * 0.9;

alert(`El precio total por comprar ${num} lápices es de ${precio}€`);
 

