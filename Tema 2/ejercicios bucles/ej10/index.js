/* Realiza un programa pida un número y muestre el cubo. 
   Repita el proceso hasta que se introduzca un valor 
   negativo. */

let num=0;
while(num>=0){
  do{ //VALIDACIÓN
    num = prompt("Introduce un número:");
    if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
  } while(isNaN(num) || !num);
  if(num>=0) alert(`${num}^3 = ${(num**3)}`);
}


