/* Crear un script que pida un número y que pinte una escalera 
   decreciente con tantos peldaños como indique el argumento 
   recibido. Ejemplo para ejecución con argumento igual a 4: */

let num, escal="";
do{
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num) || !num || num<=0);

escal+="__<br>&nbsp;&nbsp;";

for(let i=0; i<num; i++){
  escal+="|__<br>&nbsp;&nbsp;";
  for(let j=0; j<=i; j++){
    escal+="&nbsp;&nbsp;&nbsp;";
  }
}

document.write(escal);

