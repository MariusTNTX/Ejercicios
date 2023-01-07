/* Variables */
let errores = document.getElementById("errores");
let intentos = document.getElementById("intentos");
let campos = {
  nombre: document.getElementById("nombre"),
  apellidos: document.getElementById("apellidos"),
  edad: document.getElementById("edad"),
  nif: document.getElementById("nif"),
  email: document.getElementById("email"),
  provincia: document.getElementById("provincia"),
  fecha: document.getElementById("fecha"),
  telefono: document.getElementById("telefono"),
  hora: document.getElementById("hora")
}

/* Funciones de validación */
let valNom = ()=>{
  if(campos.nombre.value!='') return true;
  errores.innerHTML+='- No se ha completado el campo "Nombre"<br>';
  campos.nombre.classList.add('error');
}
let valApe = ()=>{
  if(campos.apellidos.value!='') return true;
  errores.innerHTML+='- No se ha completado el campo "Apellidos"<br>';
  campos.apellidos.classList.add('error');
}
let valEdad = ()=>{
  let edad = parseInt(campos.edad.value);
  if(edad>=0 && edad<=105) return true;
  errores.innerHTML+='- El campo "Edad" es incorrecto<br>';
  campos.edad.classList.add('error');
}
let valNif = ()=>{
  let regExp = new RegExp(/^\d{8}-[A-Z]$/);
  if(regExp.test(campos.nif.value)) return true;
  errores.innerHTML+='- El campo "NIF" es incorrecto<br>';
  campos.nif.classList.add('error');
}
let valMail = ()=>{
  let regExp = new RegExp(/^[\w\.]{3,}@\w{3,}\.\w{3}$/);
  if(regExp.test(campos.email.value)) return true;
  errores.innerHTML+='- El campo "Email" es incorrecto<br>';
  campos.email.classList.add('error');
}
let valPro = ()=>{
  if(campos.provincia.value!='0') return true;
  errores.innerHTML+='- No se ha completado el campo "Provincia"<br>';
  campos.provincia.classList.add('error');
}
let valFec = ()=>{
  let regExp = new RegExp(/^\d{2}\/\d{2}\/\d{4}$/);
  if(regExp.test(campos.fecha.value)) return true;
  errores.innerHTML+='- El campo "Fecha" es incorrecto<br>';
  campos.fecha.classList.add('error');
}
let valTel = ()=>{
  let regExp = new RegExp(/^\d{9}$/);
  if(regExp.test(campos.telefono.value)) return true;
  errores.innerHTML+='- El campo "Teléfono" es incorrecto<br>';
  campos.telefono.classList.add('error');
}
let valHora = ()=>{
  let regExp = new RegExp(/^\d{2}\:\d{2}$/);
  if(regExp.test(campos.hora.value)) return true;
  errores.innerHTML+='- El campo "Hora" es incorrecto<br>';
  campos.hora.classList.add('error');
}

let valid = [valNom,valApe,valEdad,valNif,valMail,valPro,valFec,valTel,valHora];

/* Cookie de intentos de envío Pt.1*/
if(!document.cookie.includes("intentos")) intentos.innerHTML="Intentos -> 0";
else intentos.innerHTML="Intentos -> "+leerCookie("intentos");/* document.cookie.split("=")[1]; */

/* Mayúsculas automáticas para nombre-apellidos */
document.getElementById("nombre").addEventListener("blur",(e)=>{
  document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
});
document.getElementById("apellidos").addEventListener("blur",(e)=>{
  document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
});

/* Gestión del Submit */
document.getElementById("formulario").addEventListener("submit",(e)=>{
  errores.innerHTML="";

  /* Cookie de intentos de envío Pt.2*/
  if(!document.cookie.includes("intentos")) grabarCookie("intentos",1,0);/* document.cookie="intentos=1"; */
  else {
    /* let num = parseInt(leerCookie("intentos"))+1;
    document.cookie="intentos="+num; */
    grabarCookie("intentos",parseInt(leerCookie("intentos"))+1,0)
  }
  intentos.innerHTML="Intentos -> "+leerCookie("intentos");/* document.cookie.split("=")[1]; */

  /* Validación de campos en submit */
  let valido = true;
  for(let v of valid)
    if(!v()) valido = false;

  if(!valido || !confirm("¿Deseas enviar los datos?")) e.preventDefault();
});