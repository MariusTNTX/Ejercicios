/* Programa que escribe tantas líneas de guiones <-> como 
   el número que le pida al usuario. Cada línea estará 
   formada por 30 guiones. */

let num, txt="", guiones="";
do{
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num) || !num || num <= 0);

//Construcción de las líneas (se imprime una vez para ahorrar tiempo y recursos)
for(let i=0; i<30; i++) guiones+="-";

//Construcción del output
for(let i=0; i<num; i++) txt+=guiones+"\n";

alert(txt);