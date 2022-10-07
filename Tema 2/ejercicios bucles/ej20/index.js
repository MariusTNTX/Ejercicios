/* Realizar un programa que solicite dos números, el programa 
   tiene que mostrar tantas líneas como indique el número del 
   primer número y en cada línea tantos guiones <-> seguidos 
   como señale el segundo número. */

let num1, num2, txt="", guiones="";
do{
  num1 = prompt("Introduce un número:");
  if(isNaN(num1) || !num1) alert("No has introducido un número, intentalo de nuevo");
  else if(num1<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num1) || !num1 || num1 <= 0);

do{
  num2 = prompt("Introduce un número:");
  if(isNaN(num2) || !num2) alert("No has introducido un número, intentalo de nuevo");
  else if(num2<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num2) || !num2 || num2 <= 0);

//Construcción de las líneas (se imprime una vez para ahorrar tiempo y recursos)
for(let i=0; i<num2; i++) guiones+="-";

//Construcción del output
for(let i=0; i<num1; i++) txt+=guiones+"\n";

alert(txt);