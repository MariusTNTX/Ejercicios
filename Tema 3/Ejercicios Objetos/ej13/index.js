let numJug, numCpu, numTot, elec;

do{
  numJug = prompt(`Indica un número del 1 al 5:`);
  if(isNaN(numJug) || !numJug) alert("No has introducido un número, intentalo de nuevo");
  else if(numJug<1 || numJug>5) alert("No has introducido un número entre 1 y 5, intentalo de nuevo");
} while(isNaN(numJug) || !numJug || numJug<1 || numJug>5);

do{
  elec = prompt("¿Pares o nones?").trim().toUpperCase();
  if(elec != 'PARES' && elec != 'NONES') alert("Respuesta no válida, intentalo de nuevo");
} while(elec != 'PARES' && elec != 'NONES');

numCpu = Math.floor(Math.random()*5+1);

document.getElementById("jugador").innerHTML=`<img src='images/${numJug}.PNG' alt='Mano ${numJug}'>`;
document.getElementById("cpu").innerHTML=`<img src='images/${numCpu}.PNG' alt='Mano ${numCpu}'>`;

numTot=parseInt(numJug)+parseInt(numCpu);
console.log("Número de Jugador = "+numJug);
console.log("Número de CPU = "+numCpu);

if((numTot%2==0 && elec=='PARES') || (numTot%2==1 && elec=='NONES')){
  document.getElementById("msj").innerHTML="¡HAS GANADO!";
  document.getElementById("img").innerHTML=`<img src='images/acierto.png' alt='Acierto' width='100px'>`;
} else {
  document.getElementById("msj").innerHTML="¡HAS PERDIDO!";
  document.getElementById("img").innerHTML=`<img src='images/error.png' alt='Fallo' width='100px'>`;
}
