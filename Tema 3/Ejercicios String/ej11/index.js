/* Que pida una cadena y un carácter por teclado (valida que sea un carácter) y muestra cuantas veces aparece el carácter en la cadena */

let str,car,count=0;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

do{
  car = prompt("Introduce un caracter");
  if(car.length>1) alert("Has introducido más de 1 caracter, intentalo de nuevo");
  if(car.length==0) alert("No has introducido un caracter, intentalo de nuevo");
} while(car.length!=1);

for(let i=0; i<str.length; i++){
  if(str.substring(i,i+1)==car) count++;
}

alert(`Número de caracteres '${car}' que tiene el texto "${str}" = ${count}`);
document.write(`Número de caracteres '${car}' que tiene el texto "${str}" = ${count}`);