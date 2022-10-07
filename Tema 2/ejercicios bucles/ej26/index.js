/* Repetir el ejercicio anterior, pero creando una escalera creciente */

let num, escal="";
do{
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num) || !num || num<=0);

for(let i=0; i<num; i++){
  escal+="&nbsp;&nbsp;&nbsp;";
}
escal+="__<br>";

for(let i=num; i>0; i--){
  for(let j=1; j<i; j++){
    escal+="&nbsp;&nbsp;&nbsp;";
  }
  escal+="__|<br>";
}

document.write(escal);