/* Que pida un texto y diga si es capicúa */

let str,rev="";

do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

for(let i=str.length-1; i>=0; i--) rev+=str.substring(i,i+1);

if(str==rev){
  alert(`${str} es capicúa (${str} = ${rev})`);
  document.write(`${str} es capicúa (${str} = ${rev})`);
} else {
  alert(`${str} NO es capicúa (${str} != ${rev})`);
  document.write(`${str} NO es capicúa (${str} != ${rev})`);
}