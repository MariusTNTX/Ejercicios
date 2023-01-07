//CONTADOR
if(!document.cookie.includes("contador")){ //Si la cookie no existe se crea con valor 1 y caducidad de un año
  grabarCookie("contador",1,1000*60*60*24*365);
  alert('La cookie "contador" ha sido creada');
} else { //Si la cookie existe se aumenta en 1 y se aumenta la caducidad a un año
  grabarCookie("contador",parseInt(leerCookie("contador"))+1,1000*60*60*24*365);
}

//SESION ABIERTA
if(!document.cookie.includes("sesionAbierta")){ //Si la cookie no existe se crea con el valor dado por el usuario
  if(confirm("¿Deseas aceptar el uso de cookies?")) grabarCookie("sesionAbierta","si",0);
  else borrarCookie("contador");
} else { //Si la cookie existe se intuye que las cookies estan permitidas y se muestra el numero de visitas
  alert('Número de visitas: '+leerCookie("contador"));
}