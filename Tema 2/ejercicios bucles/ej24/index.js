/* Crear un script que pida un número impar y que pinte un rombo 
   con tantos asteriscos en la fila central como indique el 
   argumento recibido. Ejemplo para ejecución con argumento igual 
   a 5: */

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

for(let i=num-2; i>0; i-=2){
  for(let j=0; j<(num-i)/2; j++){
    piram+="&nbsp;&nbsp;";
  }
  for(let j=0; j<i; j++){
    piram+="*&nbsp;";
  }
  piram+="<br>";
}

document.write(piram);