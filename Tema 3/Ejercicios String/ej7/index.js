/* Que pida un texto y lo divida en dos partes. Si el texto tiene un número impar de caracteres la primera parte debe de tener un carácter más. */

let str,long,mitad1,mitad2;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

if(str.length%2==0) long=str.length/2;
else long=Math.ceil(str.length/2);

mitad1=str.substring(0,long);
mitad2=str.substring(long,str.length);

alert(`Texto dividido: "${mitad1}" || "${mitad2}"`);
document.write(`Texto dividido: "${mitad1}" || "${mitad2}"`);