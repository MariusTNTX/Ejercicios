let nombre, long, nombres = new Array(), longitudes = new Array();

do{
  nombre = prompt("Introduce un nombre:");
  if(parseInt(nombre)==nombre || nombre.length===0) alert("valor incorrecto, intentalo de nuevo");
  else if(nombre!=="fin"){
    nombres.push(nombre);
    longitudes.push(nombre.length);
  }
} while(parseInt(nombre)==nombre || nombre.length===0 || nombre!=="fin");

for(let i in nombres){
  document.writeln(" - "+nombres[i]+": "+longitudes[i]+" caracteres.<br>");
}