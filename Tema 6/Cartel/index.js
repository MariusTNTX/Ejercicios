let boton = document.getElementById("boton");
boton.style="position: absolute; left: "+document.body.offsetWidth/2+"px; top: 161px;";

window.addEventListener("mousemove",(e)=>{
  let pad = 20;
  let vel = 20;
  let x = parseInt(boton.style.left.substring(0,boton.style.left.length-2));
  let x1 = x-pad;
  let x2 = boton.clientWidth+pad+parseInt(x)
  let y = parseInt(boton.style.top.substring(0,boton.style.top.length-2));
  let y1 = y-pad;
  let y2 = boton.clientHeight+pad+parseInt(y);

  if(e.clientX > x1 && e.clientX < x2 && e.clientY > y1 && e.clientY < y2){
    if(e.clientX > x1 && e.clientX < x) x+=vel;
    else if(e.clientX < x2 && e.clientX > x2-pad) x-=vel;
    else if(e.clientY > y1 && e.clientY < y) y+=vel;
    else if(e.clientY < y2 && e.clientY > y2-pad) y-=vel;
    boton.style = 'position: absolute; left: '+x+'px; top: '+y+'px;';
  }
});

boton.addEventListener("click",(e)=>{
  alert("LO CONSEGUISTE");
});