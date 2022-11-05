let nombre, output = new Array;

do{
  nombre = prompt("Introduce un nombre:");
  if(parseInt(nombre)==nombre || nombre.length===0) alert("valor incorrecto, intentalo de nuevo");
  else if(nombre!=="fin"){
    output.push({nombre: nombre, longitud: nombre.length});
  }
} while(parseInt(nombre)==nombre || nombre.length===0 || nombre!=="fin");

for(let p of output){
  document.writeln(" - "+p.nombre+": "+p.longitud+" caracteres.<br>");
}