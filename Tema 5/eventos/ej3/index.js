let capaScroll = document.getElementById("capa");
let capaBoton = document.getElementById("boton");

/* SCROLL */
capa.addEventListener("scroll", () => { 
  /* 
    scrollTop -> Altura en píxeles en la que se encuentra el Scroll dentro de su contenido 
    clientHeight -> Altura de la capa Scroll
    scrollHeight -> scrollTop + clientHeight (altura del contenido + altura de la capa)
  */
  if(Math.ceil(capaScroll.scrollTop+capaScroll.clientHeight)>=capaScroll.scrollHeight){ 
    capaBoton.style.display="block"; 
  } else capaBoton.style.display="none"; 
});

/* CERRAR */
let cerrar=document.getElementById("cerrar");

cerrar.addEventListener("click",()=>{ 
  document.body.removeChild(capaScroll); 
})