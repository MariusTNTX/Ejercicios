/* Escribe un programa que permita ingresar un número mientras 
   estos sean negativos. Detener cuando el número ingresado sea 
   positivo y de cómo resultado la cantidad de números negativos 
   ingresados. */

let num=-1, count=0;
while(num<0){
  do{ //VALIDACIÓN
    num = prompt("Introduce un número negativo:");
    if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  } while(isNaN(num) || !num);
  if(num<0){
    count++;
    alert("Número negativo ingresado con éxito");
  }
  else alert(`Cantidad de números negativos: ${count}`);
}