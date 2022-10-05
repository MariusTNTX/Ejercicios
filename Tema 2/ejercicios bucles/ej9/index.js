/* Como el ejercicio anterior peo que pida al 
usuario el último número de la suma */

let S=0, num;
do{
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(num) || !num || num <= 0);

for(let i=1; i<=num; i++){
  S+=i;
}

alert(`Resultado del radical de ${num}: ${S}`);