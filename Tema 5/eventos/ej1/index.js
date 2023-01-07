let capa = document.getElementById("capa");

capa.addEventListener("mouseenter",()=>{capa.classList.add("verde");});
capa.addEventListener("mouseleave",()=>{capa.classList.remove("verde");});

capa.addEventListener("mousedown",(e)=>{
  if(e.button==0) capa.classList.add("rojo");
  else if(e.button==2) capa.classList.add("azul");
});
capa.addEventListener("mouseup",(e)=>{
  if(e.button==0) capa.classList.remove("rojo");
  else if(e.button==2) capa.classList.remove("azul");
});

capa.addEventListener("contextmenu",(e)=>{
  if(e.target.className=='verde') e.preventDefault("contextmenu");
});