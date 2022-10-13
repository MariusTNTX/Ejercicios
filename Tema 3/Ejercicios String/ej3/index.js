/* Script que pida un texto y muestre su longitud */

let str;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

alert(`La longitud del texto "${str}" es de ${str.length} caracteres.`);
document.write(`La longitud del texto "${str}" es de ${str.length} caracteres.`);


