window.addEventListener("DOMContentLoaded",()=>{
  let div = document.getElementById("div"),
  div2 = document.getElementById("div2"),
  allowDrag = true, offx, offy;

  div.addEventListener("dragstart",()=>{
    console.log("dragstart (inicio de arrastre)");
  });

  div.addEventListener("drag",()=>{
    if(allowDrag) console.log("drag (arrastrando)");
  });

  div.addEventListener("dragend",(e)=>{
    console.log("dragend (final de arrastre)");
    div.style.left = (e.clientX-offx)+'px';
    div.style.top = (e.clientY-offy)+'px';
    div.style.display = 'block';
  });

  div2.addEventListener("dragenter",()=>{
    allowDrag=false;
    console.log("dragenter (inicio de superposición) (evento drag deshabilitado)");
  });

  div2.addEventListener("dragover",(e)=>{
    console.log("dragover (superponiendo)");
    e.preventDefault();
  });

  div2.addEventListener("dragleave",()=>{
    allowDrag=true;
    console.log("dragleave (final de superposición) (evento drag rehabilitado)");
  });

  div2.addEventListener("drop",()=>{
    console.log("Drop (elemento soltado sobre destino)");
  });

  div.addEventListener("mousedown",(e)=>{
    offx = e.offsetX;
    offy = e.offsetY;
  });
});