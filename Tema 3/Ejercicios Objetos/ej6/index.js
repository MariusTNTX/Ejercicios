/* Programa que reciba un texto y devuelva una letra y su posición al azar */

let str;
do{
  str = prompt("Introduce un texto");
  if(typeof(str)!="string" || str.length<2) alert("No has introducido un texto, intentalo de nuevo");
} while(typeof(str)!="string" || str.length<2);

let long = str.length;
let pos = Math.floor(Math.random()*long);
let car = str.charAt(pos);

alert(`La posición ${pos} del texto "${str}" (${long} caracteres) se corresponde con la letra "${car}"`);

