for(let i=1; i<=4; i++){
  /* Se añade la clase hidden a todos los menus */
  document.getElementById("subseccion"+i).classList.add("hidden");

  /* Si el ratón pasa por encima del titulo aparece el menú */
  document.getElementById("seccion"+i).addEventListener("mouseenter",(e)=>{
    document.getElementById("subseccion"+e.target.id[7]).classList.remove("hidden");
  });

  /* Si el ratón sale del titulo desaparece el menú */
  document.getElementById("seccion"+i).addEventListener("mouseleave",(e)=>{
    document.getElementById("subseccion"+e.target.id[7]).classList.add("hidden");
  });
}