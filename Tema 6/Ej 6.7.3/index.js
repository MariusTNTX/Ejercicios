window.addEventListener("load",()=>{
  let capa = document.getElementById("capa");
  let parrafos = document.querySelectorAll("p");

  for(let p of parrafos){
    p.addEventListener("click",(e)=>{
      //(Se actualiza el orden de párrafos tras cada click)
      parrafos = document.querySelectorAll("p"); 
      capa.insertBefore(e.target, parrafos[0]);
    });
  }
});