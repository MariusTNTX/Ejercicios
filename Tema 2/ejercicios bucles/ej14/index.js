/* Recibir un número por parámetro y mostrar su factorial */

let num, fact;
do{ //VALIDACIÓN
  num = prompt("Introduce un número:");
  if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
} while(isNaN(num) || !num);

fact = num;
for(let i=num-1; i>0; i--) fact *= i;

alert(`Factorial de ${num} = ${fact}`);