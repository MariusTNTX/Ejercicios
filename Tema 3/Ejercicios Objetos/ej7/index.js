/* Realizar un programa que genere un número aleatorio entre 1 y 50 
que será el número de líneas que tiene que escribir. Para cada línea 
calculará otro número entre 1 y 50 y escribirá tantos espacios en 
blanco como el número aleatorio y después el número */

let content = document.getElementById("content");
let filas = Math.floor(Math.random()*(50)+1);
let esp;

for(let i=0; i<filas; i++){
  esp = Math.floor(Math.random()*(50)+1);
  for(let j=0; j<esp; j++) content.innerHTML += "&nbsp;";
  content.innerHTML+= esp + "<br>";
}

alert(`La posición ${pos} del texto "${str}" (${long} caracteres) se corresponde con la letra "${car}"`);

