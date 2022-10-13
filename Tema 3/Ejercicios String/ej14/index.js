/* Pide una cadena y dos caracteres por teclado (valida que sea un carácter), sustituye la aparición del primer carácter en la cadena por el segundo carácter. */

let str,car1,car2,replace;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

do{
  car1 = prompt("Introduce el primer caracter");
  if(car1.length>1) alert("Has introducido más de 1 caracter, intentalo de nuevo");
  if(car1.length==0) alert("No has introducido un caracter, intentalo de nuevo");
} while(car1.length!=1);

do{
  car2 = prompt("Introduce el segundo caracter");
  if(car2.length>1) alert("Has introducido más de 1 caracter, intentalo de nuevo");
  if(car2.length==0) alert("No has introducido un caracter, intentalo de nuevo");
} while(car2.length!=1);

replace=str.replaceAll(car1,car2);

alert(`Cadena original = "${str}"\nCadena reemplazada = "${replace}"`);
document.write(`Cadena original = "${str}"<br>Cadena reemplazada = "${replace}"`);