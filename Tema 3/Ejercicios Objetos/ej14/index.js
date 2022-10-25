//--- V A R I A B L E S ---//
//-------------------------------------------------------------------------------------------------

let elecJug, elecCpu, numElec=['piedra','papel','tijeras','lagarto','spock'];

//--- F U N C I O N E S ---//
//-------------------------------------------------------------------------------------------------

//Valida la opción introducida por el usuario
function isValid(opc){
  return (opc==='piedra' || opc==='papel' || opc==='tijeras' || opc==='lagarto' || opc==='spock');
}

//Obtiene el resultado del jugador en una partida
function getResult(opc1, opc2){
  if(opc1===opc2) return 0;
  else if(opc1==='piedra' && (opc2==='tijeras' || opc2==='lagarto')) return 1;
  else if(opc1==='papel' && (opc2==='piedra' || opc2==='spock')) return 1;
  else if(opc1==='tijeras' && (opc2==='papel' || opc2==='lagarto')) return 1;
  else if(opc1==='lagarto' && (opc2==='papel' || opc2==='spock')) return 1;
  else if(opc1==='spock' && (opc2==='piedra' || opc2==='tijeras')) return 1;
  else return -1;
}

//--- M A I N ---//
//-------------------------------------------------------------------------------------------------

//Pide y verifica en bucle una elección de mano
do{
  elecJug = prompt("Saca Piedra, Papel, Tijeras, Lagarto o Spock:").trim().toLowerCase();
  if(!isValid(elecJug)) alert("Opción no válida, intentalo de nuevo");
} while(!isValid(elecJug));

//Se obtiene la elección de la CPU de forma aleatoria 
elecCpu = numElec[Math.floor(Math.random()*5+1)];

//Se imprimen las imágenes
document.getElementById("jugador").innerHTML=`<img src='images/${elecJug}.jpg' alt='Imagen de ${elecJug}'>`;
document.getElementById("cpu").innerHTML=`<img src='images/${elecCpu}.jpg' alt='Imagen de ${elecCpu}'>`;

//Se imprime el resultado
if(getResult(elecJug, elecCpu)==1){
  document.getElementById("msj").innerHTML="¡HAS GANADO!";
  document.getElementById("img").innerHTML=`<img src='images/acierto.png' alt='Acierto' width='200px'>`;
} else if(getResult(elecJug, elecCpu)==-1){
  document.getElementById("msj").innerHTML="¡HAS PERDIDO!";
  document.getElementById("img").innerHTML=`<img src='images/error.png' alt='Fallo' width='200px'>`;
} else {
  document.getElementById("msj").innerHTML="¡HAS EMPATADO!";
  document.getElementById("img").innerHTML=`<img src='images/empate.png' alt='Empate' width='200px'>`;
}
