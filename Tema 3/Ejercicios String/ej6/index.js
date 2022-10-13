/* Que pida un texto y cuente las vocales que tiene */

let str,vocales=0,l;
do{
  str = prompt("Introduce un texto");
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

for(let i=0; i<str.length; i++){
  l = str.substring(i,i+1).toLowerCase();
  if(l=="a"||l=="e"||l=="i"||l=="o"||l=="u") vocales++;
}

alert(`Numero de vocales de "${str}" = ${vocales}`);
document.write(`Numero de vocales de "${str}" = ${vocales}`);