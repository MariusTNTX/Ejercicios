/* Pide una cadena y muéstrela mediante un cuadro de diálogo “alert” entre comillas */

let str;

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

alert(`"${str}"`);
document.write(`"${str}"`);