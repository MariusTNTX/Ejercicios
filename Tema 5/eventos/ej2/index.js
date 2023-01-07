let v = 0, velocity = document.getElementById("velocity");

document.body.addEventListener("keydown",(e)=>{
  if(e.key=='ArrowUp'){
    if(v<120){
      v++;
      velocity.innerHTML=v;
    } else e.preventDefault();
  } else if(e.key=='ArrowDown'){
    if(v>0){
      v--;
      velocity.innerHTML=v;
    } else e.preventDefault();
  }
});
