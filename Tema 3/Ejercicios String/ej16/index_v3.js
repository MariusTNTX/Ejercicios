/* Pide una cadena y muestrala por consola simulando un cartel en movimiento. El cartel estaré en movimiento 20 iteraciones y en cada iteración limpiará la consola y mostrará la cadena, pero estando la primera letra al final
• Para poder crear un efecto de pausa en el bucle necesitarás
Var startTime=new Date();
While (new Date() – startTime <=500); */

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
  aux=array.shift();
  array.push(aux);
}

//Se llama a la función infinitamente cada medio segundo
setInterval(showTitle,500);