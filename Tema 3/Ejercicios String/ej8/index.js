/* Que pida un texto y lo escriba en mayúsculas */

let str;
do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

alert(`Conversión a mayúsculas: "${str}" => "${str.toUpperCase()}"`);
document.write(`Conversión a mayúsculas: "${str}" => "${str.toUpperCase()}"`);