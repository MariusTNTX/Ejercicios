/* Que pida un texto y diga si está escrito en mayúsculas */

let str;
do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

if(str==str.toUpperCase()){
  alert(`El texto "${str}" está escrito en mayúsculas`);
  document.write(`El texto "${str}" está escrito en mayúsculas`);
} else {
  alert(`El texto "${str}" NO está escrito en mayúsculas`);
  document.write(`El texto "${str}" NO está escrito en mayúsculas`);
}
