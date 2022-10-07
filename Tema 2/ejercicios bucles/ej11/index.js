/* Escribe un programa que pida un número y diga si es 
   positivo o negativo. Repita el proceso hasta que se 
   ingrese el número cero. */

let num=1;
while(num!=0){
  do{ //VALIDACIÓN
    num = prompt("Introduce un número:");
    if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  } while(isNaN(num) || !num);
  if(num>0) alert(`El número ${num} es positivo`);
  else if(num<0) alert(`El número ${num} es negativo`);
}


