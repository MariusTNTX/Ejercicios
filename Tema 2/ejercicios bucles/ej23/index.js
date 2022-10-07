/* Repetir el ejercicio anterior, pero dibujando una pirámide normal. */

let num, piram="";
do{
  num = prompt("Introduce un número impar:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  else if(num%2==0) alert("El número introducido es par");
} while(isNaN(num) || !num || num%2==0);

for(let i=1; i<=num; i+=2){
  for(let j=0; j<(num-i)/2; j++){
    piram+="&nbsp;&nbsp;";
  }
  for(let j=0; j<i; j++){
    piram+="*&nbsp;";
  }
  piram+="<br>";
}

document.write(piram);