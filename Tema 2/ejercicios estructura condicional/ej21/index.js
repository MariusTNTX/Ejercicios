/* Que calcule el sueldo que le corresponde al trabajador de 
una empresa que cobra 30.000 euros anuales, el programa debe 
preguntar cuántos años lleva el trabajador en la empresa y 
realizar los cálculos en función de los siguientes criterios:

a) Si lleva 10 o más años en la empresa se le aplica un 
   aumento del 10%.
b) Si lleva menos de 10 años pero 5 o más que se le aplica un 
   aumento del 7%.
c) Si lleva menos de 5 años pero 3 o más se le aplica un 
   aumento del 5%. */

let anios,porcent=0,total;

do{
   anios = prompt("Indica los años que lleva trabajando el empleado");
   if(isNaN(anios) || !anios) alert("No has introducido un número, intentalo de nuevo");
   else if(anios<=0) alert("Número no válido, intentalo de nuevo");
   } while(isNaN(anios) || !anios || anios <= 0);

if(anios>=10) porcent=10;
else if(anios<10 && anios>=5) porcent=7;
else if(anios<5 && anios>=3) porcent=5;

total=30000*(1+porcent/100);

if(porcent==0) alert("El empleado no disfrutará de ninguna subida se sueldo");
else alert(`El empleado disfrutará de una subida de sueldo del ${porcent}% siendo su nuevo sueldo anual de ${total}€`);