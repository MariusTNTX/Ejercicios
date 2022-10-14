/* Igual que el anterior, pero colocando la última letra de la cadena en primera posición */

let str, startTime, linea="", array, aux;

do{
  str = prompt("Introduce un texto").trim();
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

//Se le añade un espacio al final de la frase
str=str+" ";

array=str.split("");

/* Se genera la linea superior e inferior del cartel con la longitud de la cadena más los espacios a ambos lados */
linea=linea.padEnd(str.length+4,"-");

for(let i=0; i<20; i++){
  //Se muestra el cartel con la frase
  console.log(linea);
  console.log("| "+array.join("")+" |");
  console.log(linea);

  //Se espera medio segundo
  startTime=new Date();
  while (new Date() - startTime <=500);

  //Se modifica la frase
  aux=array.pop();
  array.unshift(aux);

  //Se limpia la consola consola
  console.clear();
}