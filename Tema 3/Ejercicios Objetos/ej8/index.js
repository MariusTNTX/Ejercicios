/* Implemente el siguiente juego: el programa seleccionará un número 
aleatorio entre 0 y 99 y el jugador debe acertarlo. En cada intento 
el jugador propondrá una solución (prompt) y se le informará si el 
número a acertar es menor o mayor que el propuesto (alert). El juego 
termina cuando se acierte la cifra o haya realizado un máximo de 12 
intentos en cuyo caso se le mostrará al jugador la calificación 
obtenida según la siguiente tabla (document.write): */

let numSecreto = Math.floor(Math.random()*100); //0-99
let num, intentoFinal;

//Se juegan 12 rondas:
for(let int=1; int<=12; int++){
  //Se pide el número y se valida
  do{
    num = prompt(`Intento ${int} - Escribe un número:`);
    if(isNaN(num) || !num) alert("No has introducido un número, intentalo de nuevo");
    else if(num<0 || num>=100) alert("No has introducido un número entre 0 y 99, intentalo de nuevo");
  } while(isNaN(num) || !num || num<0 || num>=100);

  //Se comprueba y se devuelve el resultado
  if(num==numSecreto){
    alert("¡HAS ACERTADO!");
    intentoFinal=int;
    break;
  } else if(num<numSecreto) alert("El número secreto es MAYOR de "+num);
  else alert("El número secreto es MENOR de "+num);
}

//En función del número de intentos se emite el mensaje final:
if(intentoFinal) {
  if(intentoFinal>=1 && intentoFinal<=3) document.write("<h1>Suertudo</h1>");
  else if(intentoFinal>=4 && intentoFinal<=6) document.write("<h1>Genio</h1>");
  else if(intentoFinal==7) document.write("<h1>No está mal</h1>");
  else if(intentoFinal==8) document.write("<h1>Se puede mejorar</h1>");
  else if(intentoFinal>=9 && intentoFinal<=12) document.write("<h1>¿Que pasa amigo?</h1>");
} else document.write("<h1>Eres un paquete!!!</h1>");




