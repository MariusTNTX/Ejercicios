/* Realizar un programa que compruebe si una cadena leída por teclado comienza por una subcadena introducida por teclado */

let str,sub;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

do{
  sub = prompt("Introduce una subcadena");
  if(sub.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(sub.length==0);

if(str.startsWith(sub)){
  alert(`El texto "${str}" empieza con "${sub}"`);
  document.write(`El texto "${str}" empieza con "${sub}"`);
} else {
  alert(`El texto "${str}" NO empieza con "${sub}"`);
  document.write(`El texto "${str}" NO empieza con "${sub}"`);
}
