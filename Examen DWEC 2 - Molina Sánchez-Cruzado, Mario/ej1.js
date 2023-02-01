//Asigna las cookies con el valor de sus campos correspondientes
var asignarCookie = function(){
  //Elementos a usar del DOM (se actualizan tras cada llamada):
  var codigo = document.getElementById("codigo");
  var localidades = document.getElementsByTagName("select")[0];
  var localidad = document.getElementsByTagName("option")[localidades.selectedIndex];
  var nombre = document.getElementById("nombre");
  //Se crea la fecha correspondiente a 30 minutos después y se introducen los valores
  let fechaPos = new Date(new Date().getTime()+1000*60*30).toUTCString();
  document.cookie='codigo='+codigo.value+'; expires='+fechaPos;
  document.cookie='localidad='+localidad.textContent+'; expires='+fechaPos;
  document.cookie='nombre='+nombre.value+'; expires='+fechaPos;
}

//Si hay cookies las lee y las imprime en su campo de texto correspondiente
var leerCookie = function(){
  if(document.cookie.length>0){
    //Elementos a usar del DOM (se actualizan tras cada llamada):
    var codigo = document.getElementById("codigo");
    var localidades = document.getElementsByTagName("select")[0];
    var localidad = document.getElementsByTagName("option")[localidades.selectedIndex];
    var nombre = document.getElementById("nombre");
    //Se obtiene un array de pares indice-valor de cookies y se introducen
    let cookies = document.cookie.split("; ");
    codigo.value = cookies[0].split("=")[1];
    localidad.textContent = cookies[1].split("=")[1];
    nombre.value = cookies[2].split("=")[1];
  }
}

//Si hay cookies las borra
var borrarCookie = function(){
  if(document.cookie.length>0){
    /* Se obtiene un array de pares indice-valor de cookies y 
    se les establece una fecha de expiración anterior a la actual */
    let cookies = document.cookie.split("; ");
    document.cookie = cookies[0].split("=")[0]+'=0; expires='+new Date(0).toUTCString();
    document.cookie = cookies[1].split("=")[0]+'=0; expires='+new Date(0).toUTCString();
    document.cookie = cookies[2].split("=")[0]+'=0; expires='+new Date(0).toUTCString();
  }
}