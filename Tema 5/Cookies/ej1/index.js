document.getElementById("cTextoUsuario").addEventListener("keypress",(e)=>{
  if(e.key=='Enter'){
    grabarCookie("usuario",document.getElementById("cTextoUsuario").value,1000*60*60*24*7);
    document.getElementById("capaFormulario").classList.add("hidden");
    document.getElementById("capaSaludo").classList.remove("hidden");
    document.getElementById("parrafoSaludo").innerHTML = 'Bienvenido '+leerCookie("usuario")/* document.cookie.split('=')[1] */;
  }
});

document.getElementById("botonSaludo").addEventListener("click",()=>{
  borrarCookie("usuario");
  document.getElementById("capaFormulario").classList.remove("hidden");
  document.getElementById("capaSaludo").classList.add("hidden");
  document.getElementById("cTextoUsuario").value="";
});