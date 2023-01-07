let capa1 = document.getElementById("capa1");
let capa2 = document.getElementById("capa2");

capa1.addEventListener("drag",()=>{capa1.classList.add("arrast");});
capa1.addEventListener("dragend",()=>{capa1.classList.remove("arrast");});
capa2.addEventListener("dragover",(e)=>{
  capa2.classList.add("arrast");
  e.preventDefault();
});
capa2.addEventListener("dragleave",()=>{capa2.classList.remove("arrast");});

capa2.addEventListener("drop",()=>{
  capa1.classList.add("hidden");
  capa2.classList.remove("arrast");
  capa2.innerHTML="¡Lo has logrado!";
});