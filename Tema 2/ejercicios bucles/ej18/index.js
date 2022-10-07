/* Realizar un programa que pida al usuario que introduzca 
   un número. El programa mostrará tantas letras “a” 
   seguidas en la misma línea como el número introducido 
   por el usuario. */

let num, txt="";
do{
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
} while(isNaN(num) || !num);

for(let i=0; i<num; i++) txt+="a";

alert(txt);