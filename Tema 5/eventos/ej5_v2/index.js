let capas1 = document.getElementsByClassName("capa1")
let capa2 = document.getElementById("capa2");
let capa;

for(let capa1 of capas1){
  capa1.addEventListener("drag",()=>{capa1.classList.add("arrast");console.log("hola?");});
  capa1.addEventListener("dragend",(e)=>{
    capa1.classList.remove("arrast");
    capa = e.target;
    console.log("capa: ");
    console.log(e.target);
  });
}

capa2.addEventListener("dragover",(e)=>{
  capa2.classList.add("arrast");
  e.preventDefault();
});
capa2.addEventListener("dragleave",()=>{capa2.classList.remove("arrast");});

capa2.addEventListener("drop",(e)=>{
  console.log("Evento drop: ");
  console.log(e);
  /* capa1.classList.add("hidden");
  capa2.classList.remove("arrast");
  capa2.innerHTML="¡Lo has logrado!"; */
});