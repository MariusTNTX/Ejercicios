/* Que pida un texto y elimine los espacios en blanco */

let str,out="",letra;
do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

for(let i=0; i<str.length; i++){
  letra=str.substring(i,i+1);
  if(letra!=" ") out+=letra;
}

alert(`TEXTO SIN ESPACIOS:\n${str} => ${out}`);
document.write(`TEXTO SIN ESPACIOS:<br>${str} => ${out}`);