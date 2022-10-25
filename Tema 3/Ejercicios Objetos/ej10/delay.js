let startTime = new Date();

let nombre = prompt("Introduce tu nombre y tus apellidos:");
let finishTime = new Date();
let delay = new Date(finishTime.getTime() - startTime.getTime()).getSeconds();

document.getElementById("txtDelay").innerHTML = 'En introducir "'+nombre+'" has tardado '+delay+' segundos';
