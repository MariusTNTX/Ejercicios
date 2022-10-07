/* Escribe un programa que permita ingresar números mientras 
   sean diferentes de cero. Para cada número diga si es par 
   o impar. */

let num=1;
while(num!=0){
  do{ //VALIDACIÓN
    num = prompt("Introduce un número:");
    if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  } while(isNaN(num) || !num);
  if(num%2==0 && num!=0) alert(`El número ${num} es par`);
  else if(num%2!=0 && num!=0) alert(`El número ${num} es impar`);
}