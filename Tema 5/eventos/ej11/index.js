let abrir = document.getElementById("abrir");
let cerrar = document.getElementById("cerrar");
let sidebar = document.getElementById("sidebar");
let contenido = document.getElementById("contenido");

abrir.addEventListener("click",()=>{
  sidebar.style.width='300px';
  sidebar.style.position='fixed';
  contenido.style.marginLeft='300px';
  abrir.style.display='none';
  cerrar.style.display='block';
});

cerrar.addEventListener("click",()=>{
  sidebar.removeAttribute("style");
  contenido.removeAttribute("style");
  abrir.removeAttribute("style");
  cerrar.removeAttribute("style");
});