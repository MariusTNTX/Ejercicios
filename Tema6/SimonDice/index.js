window.addEventListener("load",()=>{
  let iniciar = document.getElementById("iniciar");
  let puntos = document.getElementById("puntos");
  puntos.parentElement.style.display="none";

  iniciar.addEventListener("click",()=>{
    //Desaparece el botón y aparecen los puntos a cero
    iniciar.style.display="none";
    puntos.parentElement.style.display="block";
    puntos.value=0;
    //Inicio de la partida
    let partida = new Partida();
  });
});