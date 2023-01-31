let capaScroll = document.getElementById("capa");
let capaBoton = document.getElementById("boton");

/* SCROLL */
capa.addEventListener("scroll", () => { 
  /* 
    window.scrollY / div.scrollTop -> Altura en píxeles superior al viweport 
    window.innerHeight / div.clientHeight -> Altura del viewport
    document.body.clientHeight / div.scrollHeight -> viewport + altura superior al viewport
  */
  if(Math.ceil(capaScroll.scrollTop+capaScroll.clientHeight)>=capaScroll.scrollHeight){ 
    capaScroll.scro
    capaBoton.style.display="block"; 
  } else capaBoton.style.display="none"; 
});

/* CERRAR */
let cerrar=document.getElementById("cerrar");

cerrar.addEventListener("click",()=>{ 
  document.body.removeChild(capaScroll); 
});