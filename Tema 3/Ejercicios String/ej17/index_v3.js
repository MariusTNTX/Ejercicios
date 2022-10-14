/* Igual que el anterior, pero colocando la última letra de la cadena en primera posición */

let str, array, aux;

do{
  str = prompt("Introduce un texto").trim();
  if(str.length==0) alert("No has introducido un texto, intentalo de nuevo");
} while(str.length==0);

//Se le añade un espacio al final de la frase
str=str+" ";

//Se genera un array con cada uno de los caracteres del texto
array=str.split("");

//La función muestra el contenido del array y después modifica el orden del contenido
const showTitle = function(){
  document.title=array.join("");
  aux=array.pop();
  array.unshift(aux);
}

//Se llama a la función infinitamente cada medio segundo
setInterval(showTitle,500);