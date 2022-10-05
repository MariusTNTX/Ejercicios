/* Un año es bisiesto si:
a) Si es divisible por 4, pero no lo es de 100
• Aunque si es divisible por 100 y también por 400 si es 
bisiesto. (Ejemplos: 1984 es bisiesto, 2000 es bisiesto, 
  1800 no es bisiesto). Realiza un programa que pida al 
  usuario un año y que determine si el año introducido 
  es bisiesto o no */

let anio;

do{
  anio = prompt("Indica los años que lleva trabajando el empleado");
    if(isNaN(anio) || !anio) alert("No has introducido un número, intentalo de nuevo");
    else if(anio<=0) alert("Número no válido, intentalo de nuevo");
} while(isNaN(anio) || !anio || anio <= 0);

if((anio%4==0 && anio%100!=0) || (anio%100==0 && anio%400==0)) alert(`El año ${anio} es bisiesto`);
else alert(`El año ${anio} NO es bisiesto`);