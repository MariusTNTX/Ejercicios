/* Que pida un texto y muestre cada caracter del texto en un línea. */

let str, output="";

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

for(let i=0; i<str.length; i++) output+=str[i]+'<br>';

document.write(output);