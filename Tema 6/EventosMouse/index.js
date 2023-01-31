window.addEventListener("DOMContentLoaded",()=>{
  let div = document.getElementById("div");

  div.addEventListener("mouseenter",()=>{
    console.error("MOUSEENTER (entra al elemento padre)");
  });

  div.addEventListener("mouseleave",()=>{
    console.error("MOUSELEAVE (sale del elemento padre)");
  });

  div.addEventListener("mousemove",()=>{
    console.log("mousemove (se mueve dentro de cualquier lugar del padre)");
  });

  div.addEventListener("mouseout",()=>{
    console.warn("mouseout (sale de un elemento padre o hijo)");
  });

  div.addEventListener("mouseover",()=>{
    console.warn("mouseover (entra en un elemento hijo o padre)");
  });
});